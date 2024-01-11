function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  quadratic time: O(n^2)
*/

/* 
  Add your pseudocode here
  Initialize an array of integers
  initialize a target integer
  declare a function with the name hasTargetSum()
  that takes in two parameters: an array and a target integer

  1. Iterate through each element in the array using a for loop
  - For each number in the array, calculate the sum of the numbers in the array 
  2. if the sum of the array is equal to the target integer 
        - Return true 
  3. If none of the elements in the array have a sum equal to the target integer,
        - then return false
*/

/*
  Add written explanation of your solution here
  
  The time complexity of this algorithm is O(n^2) because there are nested loops that
  iterate over every possible pairing of elements within the array. In the worst case scenario,
  both loops will run n times where n is the length of the inputted array. Therefore,
  the time it would take to complete the algorithm grows quadratically as the size of the input
  increases.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', hasTargetSum([10, 30, 60, 30, 10, 4, 3], 20));

  console.log('Expecting: true');
  console.log('=>', hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log('');

  console.log('Expecting: true');
  console.log('=>', hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
