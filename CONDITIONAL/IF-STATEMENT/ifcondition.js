var numbers = [1, 2, 3, 4, 5, 6];
function result(n) {
    if (n % 2 === 0) {
        console.log("EVEN NUMBER");
    }
    else if (n % 1 === 0) {
        console.log("ODD NUMBER");
    }
    else {
        console.log("ENTER SOMETHING");
    }
}
numbers.forEach((result));
