# Julia Type Severity

In Julia you usually do not need to declare types for every value. The compiler tries to infer types based on how values are used in the code. In many cases this works well and results in efficient compiled code.

Sometimes the compiler cannot determine a precise type, or it ends up using a type that is less efficient. CodeGlass tries to detect these cases and highlights them so you can quickly see which functions use less efficient types.

For this feature we tried to follow the behavior of [`@code_warntype`](https://docs.julialang.org/en/v1/stdlib/InteractiveUtils/#InteractiveUtils.@code_warntype) as closely as possible. We also use the same color scheme.

- <strong style={{color: '#D070FF'}}>Purple</strong> indicates a high type severity.
- <strong style={{color: '#D97706'}}>Orange</strong> indicates a medium type severity.

These rules are not always perfect. Type inference can be complex, and in some cases the reported severity might not reflect a real performance problem.

The following rules are used to determine the severity level.

## High Type Severity

- The type is **abstract**.
- A **union** contains an abstract type.
- A **union** contains more than three types.
- **(Named) tuples** that contain:
  - a union
  - an abstract type
  - a variable length (for example varargs)  
  If none of these are present, the tuple is not considered an issue.
- Any **parametric type** (such as arrays or pairs) where one of the type parameters:
  - is abstract
  - or is a union.

## Medium Type Severity

- A **union** with three or less options where all types are concrete.