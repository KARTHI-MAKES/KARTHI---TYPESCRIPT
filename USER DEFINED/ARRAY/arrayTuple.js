{ /* let lists : Array<number>=[1,2,3,4,5,6,7,8,9];
function mapee(nums:number[]):number[]{
 return nums.map((n)=>n*2)
}
console.log(mapee(lists))*/
}
var lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, "hello", true];
function filter(v) {
    if (v === "hello") {
        return "correct";
    }
    return "hii";
}
//console.log(filter.map((i)=> (typeof i ==="string")?(filter(i):i))
console.log(lists.map(function (item) { return (typeof item === "string" ? filter(item) : item); }));
