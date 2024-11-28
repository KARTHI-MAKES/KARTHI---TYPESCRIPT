function mapping <T,U>(a:T[],b: (value: T) => U): U[]{
   return a.map(b)
}

const arrays =[1,2,3,4,5];
const multiply= mapping(arrays,(arr=>arr*2));
console.log(multiply)

const string =["HELLO"];
 const output = mapping(string,(str=>str.length))
 console.log(output)


interface content{
    name:string,
    age:number,
    gender:string,
    isEmployee:boolean
}

let contents:content[]=[{ name:"karthi",age:22,gender:"Male",isEmployee:true},
                        { name:"aishwarya",age:25,gender:"Female",isEmployee:true},
                        { name:"ritika",age:24,gender:"Female",isEmployee:true},
                        { name:"supritha",age:22,gender:"Female",isEmployee:true},
                        { name:"harish",age:29,gender:"Male",isEmployee:true},
                        { name:"hasan",age:27,gender:"Male",isEmployee:true},
                        { name:"akshay",age:27,gender:"Male",isEmployee:true}]


    function filtering <T>(a:T[],b:(item:T)=>boolean):T[] {
          return a.filter(b)
    }                   
   
   const filteringResult1 =filtering(contents,(c)=>c.age<=24) 
   const filteringResult2 =filtering(contents,(c)=>c.gender==="Female") 
   console.log(filteringResult1,filteringResult2)