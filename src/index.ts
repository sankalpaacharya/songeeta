
class User{
    constructor(protected name:string,protected email:string, protected dob:Date,protected country:string){
        this.name = name
        this.email = email
        this.dob = dob
        this.country = country
    }
}

class Member extends User{
    constructor(protected name:string,protected email:string, protected dob:Date,protected country:string, genre:Genre[]){
        super(name,email,dob,country)
    }
}




