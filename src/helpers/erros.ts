import { AuthResponse } from "@songeeta/types/user";

function authErrorGenerate(msg:string):AuthResponse{
    return {
        data:undefined,
        error:{
            message:msg
        }

}
}

export class AuthenticationFailed extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
