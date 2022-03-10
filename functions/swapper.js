const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');
  // set variables to store values to swap
  let swap1;
  let swap2;
  // get value to swap for object1
  for (const key in object1) {
    if (key === key1) {
      swap1 = object1[key];
    }
  }
  // get value to swap for object2
  for (const key in object2) {
    if (key === key2) {
      swap2 = object2[key];
    }
  }
  // swap the values at the specified keys
  object1[key1] = swap2;
  object2[key2] = swap1;
  
  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });