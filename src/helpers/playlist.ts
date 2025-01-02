import { PlaylistType, Song, Language, Genre} from "@songeeta/types/music";

class Playlist {
  private id: string;
  private name: string;
  private numberOfSongs: number;
  private tags: Genre | Language[];
  private songs: Song[];

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

  addSong(newSong:Song){
    this.songs.push(newSong);
  }

  removeSong(songId:string){
    this.songs = this.songs.filter(song=>song.id!=songId)
  }



}
