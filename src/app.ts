import { Genre } from "@songeeta/types/music";
import { USER_SANKU } from "./data/constants";
import { TUser } from "./types/user";
import { MusicPlayer } from "./helpers/player";

class User {
  protected name: string;
  protected email: string;
  protected dob: Date;
  protected country: string;

  constructor(user: Omit<TUser, Genre>) {
    this.name = user.name;
    this.email = user.email;
    this.dob = user.dob;
    this.country = user.country;
  }
}

export class Member extends User {
  genres: Genre[];

  constructor(user: TUser) {
    super(user);
    this.genres = user.genres;
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

const sanku = new Member(USER_SANKU);
console.log(sanku);

/*
below code is for testing purpose
because i was not sure how to store all the songs and play them without using any libraries
*/

const player = new MusicPlayer();
player.addSong({
  title: "Song 1",
  duration: 120,
  genre: "Rock",
  language: "English",
  author: "Nishit Bhai",
});
player.addSong({
  title: "Song 2",
  duration: 150,
  genre: "Lofi",
  language: "Hindi",
});
player.listSongs();
player.playSong();
player.nextSong();
