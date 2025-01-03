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
  private songsQueue: Song[] = [];
  private indexOfCurrentSong: number = 0;
  timeoutId: number | undefined; //we need to store  timeoutId to  clear it for pause() method

  loadSongs(playList: PlaylistType) {
    this.songsQueue = [...this.songsQueue, ...playList.songs];
  }

  addSingleSong(song: Song) {
    this.songsQueue.push(song);
  }

  play() {
    const currentSong = this.songsQueue[this.indexOfCurrentSong];
    console.log(`Playing ${currentSong.name} by ${currentSong.artist}`);

    this.timeoutId = setTimeout(() => {
      this.playNext();
    }, this.songsQueue[this.indexOfCurrentSong].duration * 1000);
    //*1000 is done to convert to seconds as setTimeout takes milliseconds as parameter

    //dekh bro current song will be played for this.duration  and immediately next song will be played and this continues as playNext also calls this.play()
  }

  playNext() {
    if (this.songsQueue.length === 0) {
      console.log("No songs in the queue.");
      return;
    }
    this.indexOfCurrentSong =
      (this.indexOfCurrentSong + 1) % this.songsQueue.length;
    this.play();
  }

  pause() {
    console.log(
      `Paused ${this.songsQueue[this.indexOfCurrentSong].name} by ${this.songsQueue[this.indexOfCurrentSong].artist}`,
    );
    if (!this.timeoutId) {
      console.log("No song is playing");
      return;
    }
    clearTimeout(this.timeoutId);
  }

  listCurrentQueue() {
    if (this.songsQueue.length === 0) {
      console.log("No songs in the queue.");
      return;
    }
    console.log("-----Your Queue-----");
    for (let i = 0; i < this.songsQueue.length; i++) {
      const song = this.songsQueue[i];
      if (this.indexOfCurrentSong === i) {
        console.log(`${song.name} by ${song.artist} <<<`);
      } else {
        console.log(`${song.name} by ${song.artist}`);
      }
    }
    console.log("--------------------");
  }
}
