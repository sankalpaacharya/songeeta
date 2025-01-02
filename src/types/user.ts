import { Genre, Playlist } from "./music";

//  we have user class and i can't name this as User type so either change the name or find something better for now im keeping it as TUser
export type TUser = {
  name: string;
  email: string;
  dob: Date;
  country: string;
  profile: string;
  genres: Genre[];
  playlist?: Playlist[] | [];
};

export type AuthResponse = {
  data:
    | {
        user: TUser;
        token: string;
      }
    | undefined;
  error:
    | {
        message: string;
      }
    | undefined;
};
