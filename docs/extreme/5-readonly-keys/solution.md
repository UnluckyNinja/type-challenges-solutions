```ts
type GetReadonlyKeys<T extends Record<keyof any, any>, U extends keyof T = keyof T> = 
  U extends keyof T 
  ? Equal<{readonly [k in U]: T[k]}, Pick<T, U>> extends true ? U : never
  : never
```