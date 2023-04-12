```ts
type Includes<T extends readonly any[], U> = 
  T extends [infer R, ...infer Rest]
  ? (Equal<U, R> extends true ? true : Includes<Rest, U>)
  : false

type ParsePair<T extends string> = 
  T extends `${infer K}=${infer V}` 
  ? {[k in K]: V} 
  : T extends `${infer B}`
    ? B extends ''
      ? never
      : { [k in B]: true }
    : never

type MergeObject<A extends Record<string, unknown>, B extends Record<string, unknown>> = 
  keyof B extends keyof A
  ? {
    [k in keyof A | keyof B]: k extends keyof B
                              ? A[k] extends string[]
                                ? Includes<A[k], B[k]> extends true
                                    ? A[k]
                                    : [...A[k], B[k]]
                                : Equal<A[k], B[k]> extends true 
                                  ? A[k] 
                                  : [A[k], B[k]]
                              : A[k]
  }
  : {
    [k in keyof A | keyof B]: (k extends keyof A ? A[k]: never) | (k extends keyof B ? B[k]: never)
  }

type MergeObjects<A extends Record<string, unknown>, B extends Record<string, unknown>[]> = 
  B extends [infer R extends Record<string, unknown>, ...infer Rest extends Record<string, unknown>[]] // without constraints here, there will be errors next line
  ? MergeObjects<MergeObject<A, R>, Rest>
  : A

type QueryToObjects<T extends string> = T extends `${infer A}&${infer Rest}` 
  ? [ParsePair<A>, ...QueryToObjects<Rest>]
  : T extends '' ? [{}] : [ParsePair<T>]

type ParseQueryString<T extends string, K extends QueryToObjects<T> = QueryToObjects<T>> = 
  K extends [...infer Others, infer Last] 
  ? Others extends [infer R, ...any[]]
    ? MergeObjects<{}, K>
    : Last
  : never
```