enum Websites{
    safari,
    google,
    Chrome = lol('chrome')
}

function lol(web:string):number{
   if(web==="chrome" ){
      return 100;
   }
   return -1
}

enum develpers{
    DEV = "dev",
    QA = 'qa',
    BROKER = 'broker'
}

console.log(Websites.Chrome )
console.log(develpers.BROKER)