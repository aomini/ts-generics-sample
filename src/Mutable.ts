/**
 * Question: Mutable
 * Write a utility type Mutable<T> that removes the readonly
 * modifier from all properties of a type.
 */
/*
type Mutable<T> = {
  // Implement here
};

type ReadonlyUser = {
  readonly id: string;
  readonly name: string;
};

type Result = Mutable<ReadonlyUser>;
// Result: { id: string; name: string }
*/
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type ReadonlyUser = {
  readonly id: string;
  readonly name: string;
};

type Result = Mutable<ReadonlyUser>;
// Result: { id: string; name: string }
