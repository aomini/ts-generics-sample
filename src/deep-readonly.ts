/**
 * Question:
 * Write a type DeepReadonly<T> that recursively makes all
 * properties of an object readonly.
 */
type DeepReadonly<T> = {};

type Example = {
  a: {
    b: {
      c: string;
    };
  };
};

type ReadonlyExample = DeepReadonly<Example>;
// Result: { readonly a: { readonly b: { readonly c: string } } }
// Example:
const a: DeepReadonly<Example> = {
  a: {
    b: {
      c: "test",
    },
  },
};

/**
 * 🚨 Explanation:
 * 
 type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
 };
 */
