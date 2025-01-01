import { Song } from "@songeeta/types/music";

export class MusicPlayer {
  private playlist: Song[] = [];
  private currentIndex: number = 0;

  playSong() {
    const cuurrSong = this.playlist[this.currentIndex];
    console.log(
      `Our beloved Songeeta started Playing: ${cuurrSong.title} by ${cuurrSong.author || "Unknown"} [${cuurrSong.duration} seconds]`,
    );
    //not sure how to play the obtained song .....
  }

  stopSong() {
    console.log("Our beloved Songeeta stopped playing.");
    //not sure how to stop playing the song .....
  }

  addSong(song: Song) {
    this.playlist.push(song);
    console.log(`Added: ${song.title}`);
  }

  nextSong() {
    this.stopSong();
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    this.playSong();
  }

  listSongs() {
    console.log("Playlist:");
    this.playlist.forEach((song, index) => {
      const marker = index === this.currentIndex ? ">>" : "  ";
      console.log(
        `${marker} ${index + 1}. ${song.title} [${song.genre}, ${song.language}]`,
      );
    });
  }
}
