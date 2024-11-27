function fibs(n, fibArray = [0, 1]) {
  if (n < 2) return 0;
  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
}

console.log("Iterateion Example: " + fibs(1)); //returns 0
console.log("Iterateion Example: " + fibs(2)); //returns 0,1
console.log("Iterateion Example: " + fibs(3)); //returns 0,1,1
console.log("Iterateion Example: " + fibs(8)); //returns 0,1,1,2,3,5,8,13
console.log("Iterateion Example: " + fibs(15)); //returns 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377

function fibsRec(n, fibArray = [0, 1]) {
  if (n <= 1) return [0];
  if (fibArray.length >= n) return fibArray;
  return fibsRec(n, [
    ...fibArray,
    fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1],
  ]);
}

console.log("Recursion Example: " + fibsRec(1)); //returns 0
console.log("Recursion Example: " + fibsRec(2)); //returns 0,1
console.log("Recursion Example: " + fibsRec(3)); //returns 0,1,1
console.log("Recursion Example: " + fibsRec(8)); //returns 0,1,1,2,3,5,8,13
console.log("Recursion Example: " + fibsRec(15)); //returns 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377
