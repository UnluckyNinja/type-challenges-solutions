```ts
type AwaitedUnion<T> = T extends Promise<infer R> ? R : T

type AwaitedArray<T extends unknown[]> = {
  [k in keyof T]: AwaitedUnion<T[k]>
}

// Without the helper type, this will cause error on case 4
// i.e. Expect<Equal<typeof PromiseAll<Array<number | Promise<number>>>([1, 2, 3]), Promise<number[]>>>,
type AwaitedArray2<T extends unknown[]> = {
  [k in keyof T]: T[k] extends Promise<infer R> ? R : T[k]
}

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<AwaitedArray<T>>
```