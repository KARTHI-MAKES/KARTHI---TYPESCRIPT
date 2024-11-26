var array1 = [1, 2, 3, 4, 5, 6, 78, 66];
var array2 = [104];
console.log(array1.push(100));
console.log(array1.pop());
console.log(array1.unshift(0));
console.log(array1.shift());
console.log(array1.splice(1, 2, 4, 4));
console.log(array1.concat(array2));
console.log(array1.forEach(function (v) { return v * 2; }));
console.log(array2.map(function (v) { return v; }));
console.log(array1.filter(function (v) { return v / 2 === 0; }));
console.log(array1.indexOf(1));
// console.log(array1.fill(4))
console.log(array1.lastIndexOf(66));
// console.log(array1.flatMap((v)=>[v,v*3]))
console.log(array1.sort(function (a, b) { return a - b; }));
