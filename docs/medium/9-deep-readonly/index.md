# 9. 深度 Readonly

https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.zh-CN.md

这一题的测试案例有些少了，如果报错很难发现是什么原因，

要点在于避免递归处理函数类型，

| Value is assignable to | {}  | object | Record<string, unknown> |
| ---------------------- | --- | ------ | ----------------------- |
| "string"               | Yes | No     | No                      |
| true                   | Yes | No     | No                      |
| 42                     | Yes | No     | No                      |
| 42n                    | Yes | No     | No                      |
| Symbol()               | Yes | No     | No                      |
| null                   | No  | No     | No                      |
| undefined              | No  | No     | No                      |
| () => {}               | Yes | Yes    | No                      |
| [1, 2]                 | Yes | Yes    | No                      |
| []                     | Yes | Yes    | No                      |
| {foo: "bar"}           | Yes | Yes    | Yes                     |
| {}                     | Yes | Yes    | Yes                     |

> 出处 https://www.reddit.com/r/typescript/comments/tq3m4f/the_difference_between_object_and_recordstring/

关于解答中 unknown 可将函数类型排除的原因，可能涉及到关于泛型中4种variance，可参考 [Link 1](https://stackoverflow.com/questions/66410115/difference-between-variance-covariance-contravariance-and-bivariance-in-typesc) 
和 [Link 2](https://stackoverflow.com/questions/61696173/strictfunctiontypes-restricts-generic-type)

::: details 个人解答（仅供参考）
<!--@include: ./solution.md-->
:::