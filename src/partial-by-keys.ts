type PartialByKeys<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

// Usage
type User = {
  id: string;
  name: string;
  age: number;
};

type PartialUser = PartialByKeys<User, "name" | "age">;
// Result: { id: string; name?: string; age?: number }
