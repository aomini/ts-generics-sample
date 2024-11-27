type Comit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type User = {
  name: string;
  age: number;
  roll: number;
};

type Omitted = Comit<User, "age">;
