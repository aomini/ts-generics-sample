// Question: Recursive Generics
/*
  type Flatten<T> = {
    // Implement here
  };

  type NestedArray = [number, [string, [boolean]]];
  type Flattened = Flatten<NestedArray>; 
  // Result: [number, string, boolean]
*/

type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T;

type NestedArray = [number, [string, [boolean]]];
type Flattened = Flatten<NestedArray>;
// Result: [number, string, boolean]

/**
  🚨 Explanation:
  Infering a new generics helps to make use of that non existing type.
  T extends (infer U)[] : T should always be an array if it is true then it is inferred as Array<U> 
  if T is not an array then T itself is returned (flattened type)
  And then the single type U is returned
 */
