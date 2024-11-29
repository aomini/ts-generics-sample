// Create pick implementation

type Cpick<T, K> = {
  [P in keyof T as P extends K ? P : never]: T[P];
};

type User = {
  name: string;
  age: number;
  roll: number;
};

type Picked = Cpick<User, "age">;
