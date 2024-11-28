var animals = /** @class */ (function () {
    function animals(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    animals.prototype.output = function (a) {
        return a;
    };
    return animals;
}());
var outcome = new animals("pitbull", "Dog");
console.log(outcome);
