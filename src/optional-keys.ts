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
