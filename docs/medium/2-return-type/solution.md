```ts
type MyReturnType<T extends (..._:any)=>any> = T extends (..._:any) => infer R ? R : never
```