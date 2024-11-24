function fibs(n) {
  let n1 = 0;
  let n2 = 1;
  let nextNum = 0;
  const fibArray = [];
  for (let i = 0; i < n; i++) {
    fibArray.push(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
  }
  return fibArray;
}

console.log("Iterateion Example: " + fibs(8));

const fibsRec = (n, arr = [0, 1]) => {
  if (arr.length >= n) return arr;
  return fibsRec(n, [...arr, arr[arr.length - 2] + arr[arr.length - 1]]);
};

console.log("Recursion Example: " + fibsRec(8));
