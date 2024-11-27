 export class animal1{
    name:string;
    age:number;
    breed:string
    constructor(name:string,age:number,breed:string){
        this.name=name;
        this.age=age;
        this.breed=breed
    }

     dog (v:string):void{
           if(v==="rotweiler"){
            console.log("DOG")
           }else{
            console.log('DIFFERENT BREED')
           }
     }
}

const Result:animal1 = new animal1("rotweiler",2,"DANGER BREED")
console.log(Result)
Result.dog("rotweiler")