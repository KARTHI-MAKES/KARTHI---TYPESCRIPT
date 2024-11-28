function mapping(a, b) {
    return a.map(b);
}
var arrays = [1, 2, 3, 4, 5];
var multiply = mapping(arrays, (function (arr) { return arr * 2; }));
console.log(multiply);
var string = ["HELLO"];
var output = mapping(string, (function (str) { return str.length; }));
console.log(output);
var contents = [{ name: "karthi", age: 22, gender: "Male", isEmployee: true },
    { name: "aishwarya", age: 25, gender: "Female", isEmployee: true },
    { name: "ritika", age: 24, gender: "Female", isEmployee: true },
    { name: "supritha", age: 22, gender: "Female", isEmployee: true },
    { name: "harish", age: 29, gender: "Male", isEmployee: true },
    { name: "hasan", age: 27, gender: "Male", isEmployee: true },
    { name: "akshay", age: 27, gender: "Male", isEmployee: true }];
function filtering(a, b) {
    return a.filter(b);
}
var filteringResult1 = filtering(contents, function (c) { return c.age <= 24; });
var filteringResult2 = filtering(contents, function (c) { return c.gender === "Female"; });
console.log(filteringResult1, filteringResult2);
