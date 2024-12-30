import {Genre} from "@songeeta/types/music"

class User{
    constructor(protected name:string,protected email:string, protected dob:Date,protected country:string){
        this.name = name
        this.email = email
        this.dob = dob
        this.country = country
    }

}

class Member extends User{
    constructor(protected name:string,protected email:string, protected dob:Date,protected country:string, protected genres:Genre[]){
        super(name,email,dob,country)
        this.genres = genres
    }

    displayInformation(member:Member){
        console.log(`Name: ${member.name} \nEmail:${member.email}`)
    }
    
}

const sankalpa = new Member("sankalpa","sankalpa@gmail.com",new Date(2024-11-22),"nepal",["Lofi"])
console.log(sankalpa)





