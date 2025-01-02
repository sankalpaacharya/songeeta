import { PlaylistType, Song, Language, Genre } from "@songeeta/types/music";

export class Playlist {
  id: string;
  private name: string;
  private numberOfSongs: number;
  private tags: Genre | Language[];
  public songs: Song[];

  constructor(playlist: PlaylistType) {
    this.id = playlist.id;
    this.name = playlist.name;
    this.numberOfSongs = playlist.numberOfSongs;
    this.tags = playlist.tags;
    this.songs = playlist.songs;
  }

  listSongs() {
    console.log(this.songs);
  }

  addSong(newSong: Song) {
    this.songs.push(newSong);
  }

  removeSong(songId: string) {
    this.songs = this.songs.filter((song) => song.id != songId);
  }
  // display more better information by formatting string
  displayInformation() {
    console.log(this.numberOfSongs, this.tags);
  }
}
