export class AuthenticationFailed extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
