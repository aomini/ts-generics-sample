/**
 * Question:
 * Create a generic function merge that merges two objects.
 * If the second argument is null or undefined, it should return the first object.
 */
function merge<T, U>(obj1: T, obj2: U | null | undefined): T & U {
  // Implement here
}

const result = merge({ a: 1 }, { b: 2 });
// Result: { a: 1; b: 2 }

/* Solution */
/*
function merge<T, U>(obj1: T, obj2: U): T & U;
function merge<T, U>(obj1: T, obj2?: null): T;
// Implementation:
function merge<T, U>(obj1: T, obj2?: U | null): (T & U) | T {
  if (!obj2) {
    return obj1;
  }

  return { ...obj1, ...obj2 };
}
const result = merge({ a: 1 }, { b: 2 });
// Result: { a: 1; b: 2 }

const result2 = merge({ a: 1, b: 2 }, undefined);
// Result: { a: 1, b: 2 }
*/
