type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Example = () => string;

// Infer the return type of `Example`
type Result = ReturnType<Example>; // Result is `string`

type Test = Exclude<"a", keyof { a: string; b: number }>;
type B = Extract<"a", keyof { a: string; b: number }>;
