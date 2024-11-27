// Question:
/*
type OptionalKeys<T> = {};

type User = {
  id: string;
  name?: string;
  age?: number;
};

type Result = OptionalKeys<User>;
// Result: "name" | "age"
*/

// Solution
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

type User = {
  id: string;
  name?: string;
  age?: number;
};

type Result = OptionalKeys<User>;
// Result: "name" | "age"

/**
 * 🚨 Explanation:
 *  [K in keyof T]-?: removes the optional cases
 *  {} extends Pick<T, K> checks if {} can be assigned to the picked object type
 *  This case is false for undefined and null so optional types satisfy this condition
 *  [keyof T] will return union of keys ignoring never types.
 *  The condition abv will make all required types never hence only returns the optional keys
 */
