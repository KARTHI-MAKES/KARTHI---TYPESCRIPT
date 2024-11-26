class Values{
    name:string //="KARTHI"; // before using constructor inside class if u were assigning the type to the variablee you needd to give the value 
    age:number // =23

constructor(name:string,age:number){
    this.name = name;
    this.age =age
}

get _age(){
    return this.age
}

set _age(n:number){
     this._age =n
}

printName(){
    console.log(this.name)
}
}

const newValues:Values = new Values("KARTHI",23) // if u were using class means u need to store the class variable in new cconstant variable
// before using access modifier u can change the name and age
newValues.name ="MADARA";
newValues.age = 100;
console.log(newValues.name,newValues.age)