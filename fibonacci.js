function fibs(n, fibArray = [0, 1]) {
  if (n < 2) return 0;
  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
}

console.log("Iterateion Example: " + fibs(8));

function fibsRec(n, fibArray = [0, 1]) {
  if (n <= 1) return [0];
  if (fibArray.length >= n) return fibArray;
  return fibsRec(n, [
    ...fibArray,
    fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1],
  ]);
}

console.log("Recursion Example: " + fibsRec(8));
