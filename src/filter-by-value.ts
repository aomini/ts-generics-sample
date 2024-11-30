/**
 * Question: Filter by value
 * Create a utility type FilterByValueType<T, U>
 * that removes keys from T whose values are not assignable to U.
 */
/*


type FilterByValueType<T, U> = {
  // Implement here
};

type User = {
  id: string;
  age: number;
  isAdmin: boolean;
};

type Result = FilterByValueType<User, number>;
// Result: { age: number }

*/

/* Solution */
type FilterByValueType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};

type User = {
  id: string;
  age: number;
  isAdmin: boolean;
};

type Result = FilterByValueType<User, number>;
// Result: { age: number }
