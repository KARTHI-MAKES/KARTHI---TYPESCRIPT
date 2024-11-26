var Values = /** @class */ (function () {
    function Values(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Values.prototype, "_age", {
        get: function () {
            return this.age;
        },
        set: function (n) {
            this._age = n;
        },
        enumerable: false,
        configurable: true
    });
    Values.prototype.printName = function () {
        console.log(this.name);
    };
    return Values;
}());
var newValues = new Values("KARTHI", 23); // if u were using class means u need to store the class variable in new cconstant variable
// before using access modifier u can change the name and age
newValues.name = "MADARA";
newValues.age = 100;
console.log(newValues.name, newValues.age);