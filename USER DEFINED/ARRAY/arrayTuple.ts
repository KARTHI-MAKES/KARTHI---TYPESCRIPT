  {/* let lists : Array<number>=[1,2,3,4,5,6,7,8,9];
function mapee(nums:number[]):number[]{
   return nums.map((n)=>n*2)
}
console.log(mapee(lists))*/}



let lists : (string|number|boolean)[]=[1,2,3,4,5,6,7,8,9,"hello",true];
function filter(v:string):string{
       if(v==="hello"){
        return"correct"
       }
       return "hii"
}
//console.log(filter.map((i)=> (typeof i ==="string")?(filter(i):i))
console.log(lists.map((item) => (typeof item === "string" ? filter(item) : item)));
