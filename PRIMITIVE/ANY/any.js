"use strict";
//with any type it allow to do anyting without restrictiona and there will be no typechecking Error
Object.defineProperty(exports, "__esModule", { value: true });
const array = ['a', 'e', 'd', 2, 4, 5, true, {
        name: "karthi", age: 10
    }, {
        name: "manoj", age: 14
    }];
console.log(array[8]);
/*
// but here i had used unknow it wont allow you to do what any type is done .if it was a number inside the function it want to be a number not as string ,object anymore
function anyFunction(number :unknown){
        return number+2
}
(2)*/
