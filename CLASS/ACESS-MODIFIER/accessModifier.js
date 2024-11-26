//  there are 3 types of access modifier PRIVATE, PUBLIC AND PROTECTED
var Details = /** @class */ (function () {
    function Details(name, age, isemployeed, companyName) {
        this.pname = name;
        this.age = age;
        this.isemployeed = isemployeed;
        this.companyName = companyName;
    }
    Object.defineProperty(Details.prototype, "_name", {
        get: function () {
            return this.pname;
        },
        set: function (n) {
            this.pname = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Details.prototype, "_age", {
        get: function () {
            return this.age;
        },
        set: function (a) {
            this.age = a;
        },
        enumerable: false,
        configurable: true
    });
    return Details;
}());
var newDetails1 = new Details("KARTHI", 23, true, "MNK");
var newDetails2 = new Details("KARTHI", 24, true, "MNK");
newDetails2.companyName = "MNK GCS";
//    newDetails.name ="ITACHI"
console.log(newDetails2);
console.log(newDetails2.companyName);
