export type Genre = "Pop" | "Rock" | "Lofi" | "Rap" | "Hip-hop";
export type Language = "Hindi" | "English" | "Nepali" | "Punjabi" | "Gujarati";

export type Song = {
  id: string;
  name: string;
  duration: number; // in seconds
  genre: Genre[];
  language: Language;
  artist: string;
};

export type PlaylistType = {
  id: string;
  name: string;
  numberOfSongs: number;
  tags: Genre | Language[];
  songs: Song[];
};

export type MusicPlayer = {};
