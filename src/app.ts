import { Genre } from "@songeeta/types/music";
import { USER_SANKU } from "./data/constants";
import { TUser } from "./types/user";

class User {
  constructor(
    protected name: string,
    protected email: string,
    protected dob: Date,
    protected country: string,
  ) {
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.country = country;
  }
}

export class Member extends User {
  constructor(
    protected name: string,
    protected email: string,
    protected dob: Date,
    protected country: string,
    protected profile: string,
    protected genres: Genre[],
  ) {
    super(name, email, dob, country);
    this.genres = genres;
  }

  displayInformation(member: Member) {
    console.log(`Name: ${member.name} \nEmail:${member.email}`);
  }
}

/*
----basic WORKFLOW for us----
I'm gonna make a login,signup, auth middleware class and will work accordingly 
first signup, login, check the auth middleware(rate limiting maybe?)
select the genres of music
listen music if one is play don't allow other to play
and when user is listening music keep collecting the information and later we can use

*/


const sanku = new Member(
  USER_SANKU.name,
  USER_SANKU.email,
  USER_SANKU.dob,
  USER_SANKU.country,
  USER_SANKU.profile,
  USER_SANKU.genres,
);
console.log(sanku);
