export type Genre = "Pop" | "Rock" | "Lofi" | "Rap" | "Hip-hop";
export type Language = "Hindi" | "English" | "Nepali" | "Punjabi" | "Gujarati";

export type Song = {
  title: string;
  duration: number;
  genre: Genre;
  language: Language;
  author?: string; //Nishit bhai "?" matlab author hai to thik nahi hai fir bhi chalega
};
