/**
 * Question: Required By Keys
 * Create a utility type RequiredByKeys<T, K> that makes the
 * specified keys K in a type T required, while keeping the rest unchanged.
 */

/*
type RequiredByKeys<T, K extends keyof T> = {
  // Implement here
};

type User = {
  id: string;
  name?: string;
  age?: number;
};

type Result = RequiredByKeys<User, "name">;
// Result: { id: string; name: string; age?: number }
*/

/** Solution */

type RequiredByKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type User = {
  id: string;
  name?: string;
  age?: number;
};

type Result = RequiredByKeys<User, "name">;
// Result: { id: string; name: string; age?: number }
