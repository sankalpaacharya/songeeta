import { PlaylistType, Song, Language, Genre } from "@songeeta/types/music";

export class Playlist {
  id: string;
  name: string;
  numberOfSongs: number;
  tags: Genre | Language[];
  songs: Song[];

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
    this.numberOfSongs++;
    this.songs.push(newSong);
  }

  removeSong(songId: string) {
    this.numberOfSongs--;
    this.songs = this.songs.filter((song) => song.id != songId);
  }
  // display more better information by formatting string
  displayInformation() {
    console.log(this.numberOfSongs, this.tags);
  }
}
