/**
 * Question"
 * Tuple to Object
 * Write a utility type TupleToObject<T>
 * that converts a tuple into an object where the tuple elements are the keys and their values are true.
 */
/*
type TupleToObject<T extends readonly string[]> = {
  // Implement here
};

type Tuple = ["a", "b", "c"];
type Result = TupleToObject<Tuple>;
// Result: { a: true; b: true; c: true }
*/
type TupleToObject<T extends readonly string[]> = {
  // Implement here
  [P in keyof T as T extends (infer U)[] ? U : never]: true;
};

type Tuple = ["a", "b", "c"];
type Result = TupleToObject<Tuple>;
// Result: { a: true; b: true; c: true }
