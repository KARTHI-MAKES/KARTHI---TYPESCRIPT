var addressBook = [
    { name: "Tom", phone: 123 - 456 - 7890, city: "New York" },
    { name: "Jerry", phone: 987 - 654 - 3210, city: "Los Angeles" },
    { name: "Mickey", phone: 555 - 555 - 5555, city: "Chicago" }
];
var filtered = (addressBook.find(function (v) { return v.name === "Tom"; }));
console.log(filtered);
