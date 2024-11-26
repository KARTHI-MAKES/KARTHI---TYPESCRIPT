class Anime{
    Name:string
    Friend:string
    Spower:string
    DOB:string
    clan:string


    constructor(Name:string,Friend:string,Spower:string,DOB:string,clan:string){

        this.Name=Name;
        this.Friend=Friend;
        this.Spower =Spower;
        this.DOB=DOB;
        this.clan=clan

    }

    calculateAge(){
          return new Date().getFullYear() - new Date(this.DOB).getFullYear()
    }

}

class Anime2 extends Anime {

    villian:string
    heroVillain:string

    constructor(Name:string,Friend:string,Spower:string,DOB:string,clan:string,villian:string,heroVillian:string) {
        super(Name,Friend,Spower,DOB,clan)
        this.villian=villian;
        this.heroVillain =heroVillian
    }
}

const value:Anime2 = new Anime2("NARUTO","SASUKE","RASEGAN","25-7-2002","UZUMAKI","MADARA","ITACHI")
console.log(value)