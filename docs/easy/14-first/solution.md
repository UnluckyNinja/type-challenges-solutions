```ts
// 判断 length 是否为0 或者 T extends [] 都可以
type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
type First<T extends any[]> = T extends [] ? never : T[0];
// 还可以通过类型推断实现
type First<T extends any[]> = T extends [infer F, ...unknown[]] ? F : never;
```