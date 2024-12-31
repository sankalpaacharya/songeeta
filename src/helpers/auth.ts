import { JWT_TOKEN, USERNAME, PASSWORD, SuccessAuthResponse, ErrorAuthResponse } from "@/data/constants";
import { Genre } from "@songeeta/types/music";
import { AuthenticationFailed } from "@/helpers/erros"; 
import { AuthResponse } from "@songeeta/types/user";

// to be fix: throw error and the AuthReponse Object as well this is only throwing an authreponse object
class Auth {
  async login(username: string, password: string): Promise<AuthResponse>{
    try {
      if (username === USERNAME && password === PASSWORD) {
        // simulate getting data from the database and get the data 
        return SuccessAuthResponse
      } else {
        return ErrorAuthResponse
      }
    } catch (error) {return ErrorAuthResponse}
  }
  async singup(
    username: string,
    password: string,
    email: string,
    genres: Genre[],
  ): Promise<string> {
    // apply validation like email, password length and other stuff
    return JWT_TOKEN;
  }
}
