import { PlaylistType, Song } from "@songeeta/types/music";

/* 
How music player will work ?
it should be separate from the playlist
music player will accept the song or playlist 
initialize the queue, if it's playlist load all song to the playlist 
if it's single song load to the playlist and when user hits nextSong select the genre randomly if the song has
multiple genre, based on that genre select one random music 

*/

export class MusicPlayer {
  private songsQueue = [];

  play(playable: Song | PlaylistType) {
    if (typeof playable == Song) {
    }
  }
}
