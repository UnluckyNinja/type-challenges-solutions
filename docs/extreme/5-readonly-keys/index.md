# 5. 获取只读字段

https://github.com/type-challenges/type-challenges/blob/main/questions/00005-extreme-readonly-keys/README.zh-CN.md

::: details 思路
关键问题在于如何判断某个属性为 `readonly`？如果你想到的是 `extends` 则会卡住，因为 `readonly` 并不影响 `extends` 的判断
```ts
type obj = {
  prop: number
}
type a = Readonly<obj> extends obj ? 1 : 2 // 1
type b = obj extends Readonly<obj> ? 1 : 2 // 1
```
[Playground](https://www.typescriptlang.org/play?ssl=5&ssc=43&pln=1&pc=1#code/C4TwDgpgBA9gRgKygXigbwFBSmATjMALigDsBXAWzglwwF8NRIoBDFKAJQhYBMYSANiAA88BAD4oEAB7AIJHgGdYiKAH4oARijEATI3DQ47MVNnylnbn0Eixkjdr1A)

`A extends B` 是以 A 是否可赋值给 B 作为判断，
这里你需要用到比其更严格的一致性检查，也就是 `Equal` 工具类。

同时，一次比较一整个对象就确定所有只读属性似乎不太可能，但如果比较单个属性的对象，每次都可以确定一个属性是否只读。
所以这里我们构造一个 `readonly` 版本的单属性对象，同时利用 `Pick<T, P>` 挑选相同属性使其同样只包含这一个属性，即可完成比较

接下来就是考虑如何对每个属性都进行如上的比较，
在此我们利用了条件类型的一个特性，即 `extends` 左侧为联合类型时，其将变为分布式比较，而 `keyof Type` 正好满足这点
我们利用一个冗余的条件类型判断达成这点，并当 `Equal<> extends true` 满足时即返回该属性，无需返回时则返回 `never`。
由条件类型的特性，分布式比较后续的结果会重新统合为一个联合类型，其中的 `never` 将被自动去除，即为解答。

:::

::: details 个人解答（仅供参考）
<!--@include: ./solution.md-->
:::