import { Song } from "@songeeta/types/music";

export class MusicPlayer {
  private playlist: Song[] = [];
  private currentIndex: number = 0;

  playSong() {
    const cuurrSong = this.playlist[this.currentIndex];
    console.log(
      `Our beloved Songeeta started Playing: ${cuurrSong.name} by ${cuurrSong.artist || "Unknown"} [${cuurrSong.duration} seconds]`,
    );
  }

  stopSong() {
    console.log("Our beloved Songeeta stopped playing.");
  }

  addSong(song: Song) {
    this.playlist.push(song);
    console.log(`Added: ${song.name}`);
  }

  nextSong() {
    this.stopSong();
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    this.playSong();
  }

  listSongs() {
    this.playlist.forEach((song, index) => {
      const marker = index === this.currentIndex ? ">>" : "  ";
      console.log(
        `${marker} ${index + 1}. ${song.name} [${song.genre}, ${song.language}]`,
      );
    });
  }
}
