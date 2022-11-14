let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];

console.log (arr.flat(Infinity).reduce((a, b) => a+b, 0));