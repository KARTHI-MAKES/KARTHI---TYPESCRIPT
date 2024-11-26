//  there are 3 types of access modifier PRIVATE, PUBLIC AND PROTECTED
class Details{
    private pname:string // here # was used for private property u can use private keyword or symbol if u were using priavte keyword u cannot have acces to change the value outsdide the class
    protected age:number // PROTECTED IS SAME AS PRIVATE but the prob is if the result is 100 object output is there means it will give you the last object output
     isemployeed:boolean
     public companyName:string


      constructor(name:string,age:number,isemployeed:boolean,companyName:string){
        this.pname=name;
        this.age=age;
        this.isemployeed=isemployeed;
         this.companyName =companyName
      }

    get _name(){
    return this.pname
     }

     set _name(n:string){
       this.pname =n   
     }

     get _age(){
         return this.age  
     }

     set _age(a:number){
        this.age=a
     }

}

   const newDetails1:Details = new Details("KARTHI",23,true,"MNK")
   const newDetails2:Details = new Details("KARTHI",24,true,"MNK")
   newDetails2.companyName ="MNK GCS"
//    newDetails.name ="ITACHI"
     console.log(newDetails2)
     console.log(newDetails2.companyName)

