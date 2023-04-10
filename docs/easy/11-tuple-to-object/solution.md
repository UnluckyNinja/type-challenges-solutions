```ts
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [v in T[number]]: v
}
```