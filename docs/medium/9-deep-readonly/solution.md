```ts
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<keyof any, unknown> | any[]
    ? DeepReadonly<T[K]>
    : T[K];
};
```