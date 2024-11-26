var Direction;
(function (Direction) {
    Direction[Direction["north"] = 0] = "north";
    Direction[Direction["south"] = 1] = "south";
    Direction[Direction["west"] = 2] = "west";
    Direction[Direction["east"] = 3] = "east";
})(Direction || (Direction = {}));
var myDirection = Direction.north;
switch (myDirection) {
    case myDirection: {
        console.log("you are heading towards NORTH");
        break;
    }
    case myDirection: {
        console.log("you are heading towards SOUTH");
        break;
    }
    case myDirection: {
        console.log("you are heading towards EAST");
        break;
    }
    case myDirection: {
        console.log("you are heading towards WEST");
        break;
    }
    default: {
        console.log("HEADING TOWARDS HELL");
    }
}
