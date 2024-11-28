class animals{
    name:string
    gender:string
     
    constructor(name:string,gender:string){
      this.name=name;
      this.gender=gender
    }

     output<T extends animals>(a:T) {
        return a
    }
}

const outcome:animals=new animals("pitbull","Dog")
console.log(outcome)