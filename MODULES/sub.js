"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animal1 = void 0;
var animal1 = /** @class */ (function () {
    function animal1(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    animal1.prototype.dog = function (v) {
        if (v === "rotweiler") {
            console.log("DOG");
        }
        else {
            console.log('DIFFERENT BREED');
        }
    };
    return animal1;
}());
exports.animal1 = animal1;
var Result = new animal1("rotweiler", 2, "DANGER BREED");
console.log(Result);
Result.dog("rotweiler");
