// Create omit implementation

type Comit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type User = {
  name: string;
  age: number;
  roll: number;
};

type Omitted = Comit<User, "age">;

/**
 * 🚨 Explanation:
 * The as syntax is used to filter out the never keys
 * Property is in keyof T as property should be in K
 */
