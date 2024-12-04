/**
 * Question: Merge two types
 * Create a utility type Merge<T, U> that merges two object types.
 * If a key exists in both types, the value from U should take precedence.
 */

/*
type Merge<T, U> = {
  // Implement here
};

type A = { id: string; name: string };
type B = { name: number; age: number };

type Result = Merge<A, B>;
// Result: { id: string; name: number; age: number }
*/

/** Solution */
type Merge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? U[K]
    : K extends keyof T
    ? T[K]
    : never;
};

type A = { id: string; name: string };
type B = { name: number; age: number };

type Result = Merge<A, B>;
// Result: { id: string; name: number; age: number }
