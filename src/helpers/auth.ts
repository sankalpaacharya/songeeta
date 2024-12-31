import { JWT_TOKEN, USERNAME, PASSWORD } from "@/data/constants";
import { Genre } from "@songeeta/types/music";
import { AuthenticationFailed } from "@/helpers/erros";

class Auth {
  login(username: string, password: string): string | undefined {
    try {
      if (username === USERNAME && password === PASSWORD) {
        return JWT_TOKEN;
      } else {
        throw new AuthenticationFailed("Incorrect email or password");
      }
    } catch (error) {}
  }
  singup(
    username: string,
    password: string,
    email: string,
    genres: Genre[],
  ): string {
    // apply validation like email, password length and other stuff
    return JWT_TOKEN;
  }
}
