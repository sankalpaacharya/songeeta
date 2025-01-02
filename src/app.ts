import { Genre, Playlist, Song } from "@songeeta/types/music";
import { MOCKINGBIRD, USER_SANKU } from "./data/constants";
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
  playlist: Playlist[] 

  constructor(user: TUser) {
    super(user);
    this.genres = user.genres;
    this.playlist = user.playlist || []
  }

  displayInformation(member: Member) {
    console.log(`Name: ${member.name} \nEmail:${member.email}`);
  }

  makePlaylist(playlist:Playlist){
    this.playlist.push(playlist)
  }
  
  addSongToPlaylist(song:Song,playListId:string){
     this.playlist.forEach((list)=>{
      if(list.id===playListId){
       list.songs.push(song) 
      }
     }) 
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

const player = new MusicPlayer();

// player.addSong(MOCKINGBIRD);
// player.addSong(MOCKINGBIRD);
// player.listSongs();
// player.playSong();
// player.nextSong();
