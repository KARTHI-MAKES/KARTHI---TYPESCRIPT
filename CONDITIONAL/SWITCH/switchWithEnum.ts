enum Direction{
    north,
    south,
    west,
    east
}

let myDirection:Direction = Direction.north; // in this if we change direction according to that switch case will work
switch(myDirection){
    case myDirection:{
        console.log("you are heading towards NORTH")
        break;
    }
     case myDirection:{
        console.log("you are heading towards SOUTH")
        break;
     }
     case myDirection:{
        console.log("you are heading towards EAST")
        break;
     }
     case myDirection:{
        console.log("you are heading towards WEST")
        break;
     }
     default :{
         console.log("HEADING TOWARDS HELL")
     }
          
    }