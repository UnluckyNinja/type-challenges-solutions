```ts
type Includes<T extends readonly any[], U> = 
  T extends [infer R, ...infer Rest]
  ? (Equal<U, R> extends true ? true : Includes<Rest, U>)
  : false
```