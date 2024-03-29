# 前言
本人也在学习之中，如有纰漏欢迎指正

## 一些常用语法
假定你已经有一些基础的类型和泛型相关知识，个人总结一些在这些练习里会经常用到的语法

* 泛型约束 - 在声明的等号左侧泛型参数内使用 `T extends U` 的语法。  
  由于官方 Typescript Playground 内置的语法检查并不会在返回 never 时满足 `//@ts-expect-error`，
  添加泛型约束可以覆盖相关测试案例。

* 条件类型 - 在等号右侧使用的 `T extends U ? A : B`，在条件为真时返回A，为假时返回B。  
  其有两个要点：

  1. 对泛型包装进行解包。可以在条件类型中使用 `infer I` 的语法来对未知类型进行占位，并可用于当条件为真时的返回类型中。
     不光可以使用在泛型参数中，例如 `T extends Promise<infer R> ? R : never`，
     还可用于数组的占位，例如 `T extends [infer R, any, ...infer U] : U : never`。

  2. 当联合类型（Union Type）被用于测试条件时，将变为 Distributive，意味着其将被拆分为单独的类型进行条件判断，
     并在判断完成后，将各自结果重新组合成一个联合类型作为最终类型。
