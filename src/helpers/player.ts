import {  Song } from "@songeeta/types/music";
import { Playlist } from "./playlist";

/* 
How music player will work ?
it should be separate from the playlist
music player will accept the song or playlist 
initialize the queue, if it's playlist load all song to the playlist 
if it's single song load to the playlist and when user hits nextSong select the genre randomly if the song has
multiple genre, based on that genre select one random music 
*/

// for musicplayer only accepts the playlist make it to accept the single Song as well

 export class MusicPlayer {

  private songsQueue: Song[] = []; 
  private indexOfCurrentSong: number = 0

  loadSongs(playList: Playlist) {
    this.songsQueue = [...this.songsQueue, ...playList.songs];  
   }

  play() {
    const currentSong = this.songsQueue[this.indexOfCurrentSong]
    console.log(`Playing ${currentSong.name} by ${currentSong.artist}`)
  }

  playNext(){
    if(this.indexOfCurrentSong>this.songsQueue.length){
      this.indexOfCurrentSong = 0
    }
    else{
    this.indexOfCurrentSong+=1
    }
    this.play()
  }

}