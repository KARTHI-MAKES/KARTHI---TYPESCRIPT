interface info {
    user: string
    email: string
    phoneno : number
    startTrail():string
}

const newInfo :collectedInfo ={
        user:"karthi",
        email:"k@gamil.com",
        phoneno:797849894,
        houseno:70,
        flatName:"POORN PALACE",
        startTrail: (()=>{
            console.log(`user ${newInfo.user}`);
            return "free trail is done"
       })
    }
    
console.log(newInfo.startTrail())


// with using e,\xtend method in interface

interface info{
     houseno:number,
    flatName:string
}

interface collectedInfo extends info {
        houseno:number,
        flatName:string
}


export{}