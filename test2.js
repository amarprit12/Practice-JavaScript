const arr1 = [2, 6, 7, 5, 9, 8, 2];

// map method
const newArr = arr1.map((element, index, arr1) => {
  return element * 2;
});

console.log(newArr);

// filter method
//filter even values from array

const arr2 = [2, 5, 4, 6, 3, 7, 8, 9];
const newArr2 = arr2.filter((element, index, arr2) => {
  return element % 2 === 0;
});
console.log(newArr2);

// reduce method to sum all elements of array
// reduce method reduces array elements to single value
const arr3 = [2, 4, 5, 6];
const newValue = arr3.reduce((prev, curr) => {
  return prev + curr;
});
console.log(newValue);
