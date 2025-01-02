import { TUser, AuthResponse } from "../types/user";
import { Member } from "../app";
import { Song } from "@songeeta/types/music";
export const JWT_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InNhbmt1IiwiaWF0IjoxNTE2MjM5MDIyfQ.HLODmG_gaTiLtIO83-9k3S4pwAx821u0ibz8w0FElfg`;
export const USERNAME = "sanku";
export const PASSWORD = "sanku@123";

export const USER_SANKU: TUser = {
  name: "sankalpa",
  email: "sankalpaacharya01@gmail.com",
  country: "nepal",
  dob: new Date(2004 - 11 - 10),
  profile: "https://github.com/sankalpaacharya.png",
  genres: ["Rap"],
};

export const SuccessAuthResponse: AuthResponse = {
  data: {
    user: USER_SANKU,
    token: JWT_TOKEN,
  },
  error: undefined,
};
export const MOCKINGBIRD: Song = {
  id: "eminem-12",
  name: "Eminem- Mocking Bird",
  duration: 120,
  artist: "Eminem",
  language: "English",
  genre: ["Rap"],
};
export const ErrorAuthResponse: AuthResponse = {
  data: undefined,
  error: {
    message: "invalid password",
  },
};
