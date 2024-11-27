// here i am importing the details from sub to main i am not again decalaring the varibale and its types in constructor or class .i am taking from the sub file .This is known as MODULE CONCEPT OF IMPORT AND EXPORT 

import { animal1 } from "./sub";
const animal2:animal1 =new animal1("PITBULL",1,"SAFE")
console.log(animal2)
