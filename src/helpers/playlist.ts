import { Song } from "@songeeta/types/music";

class Playlist{
    private songs:Song[]
    constructor(songs:Song[]){
        this.songs = songs 
    }
    displayInformation(){
        console.log(this.songs)
    }

}