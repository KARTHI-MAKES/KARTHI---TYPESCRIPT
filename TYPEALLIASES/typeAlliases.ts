type Details ={
  readonly _id : 1 // this is read only  type method
    user:string,
    email:string,
    number:number
    payment?:boolean // this is optional if you need to enter the value means you can enter otherwise dont need
}

type  Details1 = Details&{
     user:string,
     email:string
}
function student1(user:Details1){
       return user;
}

console.log (student1({_id :1,user:"karthi",email:"k@gmail.com",number:89766464}))
export{}