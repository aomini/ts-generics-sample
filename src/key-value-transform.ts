/**
 * Question:KeyValue Transformation
 * Create a type KeyValueTransform<T, M>
 * that transforms all keys of T into the shape defined by M.
 */
type KeyValueTransform<T, M> = {
  // Implement here
};

type Original = {
  name: string;
  age: number;
};

type Transformed = KeyValueTransform<Original, { key: string; value: any }>;
// Result: { name: { key: string; value: string }; age: { key: string; value: number } }

/**
 * Solution
  type KeyValueTransform<T, M> = {
    // Implement here
    [K in keyof T]: M extends { key: infer KType; value: infer vType }
      ? { key: KType; value: T[K] }
      : never;
  };
 */
