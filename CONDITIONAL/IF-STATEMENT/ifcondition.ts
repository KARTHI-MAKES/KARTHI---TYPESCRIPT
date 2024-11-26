var numbers:(number)[]=[1,2,3,4,5,6];
 function result  (n:number):void{
    
    if(n%2===0){
       console.log("EVEN NUMBER")}
       else if(n%1===0){
          console.log("ODD NUMBER")
       }
       else{
        console.log("ENTER SOMETHING")
       }
 }

numbers.forEach((result)) // here i am iterating every number in an array and checking its odd, even