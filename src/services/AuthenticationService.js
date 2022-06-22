import HttpClient from "./utils/HttpClient";

class AuthenticationService {
  constructor() {
    this.httpClient = new HttpClient("http://127.0.0.1:3000/");
  }

  async authenticate({ username, password }) {
    const response = await this.httpClient.postFree(
      "api/v1/authentication",
      JSON.stringify({
        username,
        password,
      })
    );
    return response;
  }
}

export default new AuthenticationService();
