'use strict';
const args = process.argv;
const nums = args.slice(2);

function sum(nums) {
  const sum = Number(nums[0]) + Number(nums[1]);
  return sum;
}

console.log(sum(nums));