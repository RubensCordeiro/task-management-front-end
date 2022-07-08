import HttpClient from "./utils/HttpClient";

class AuthenticationService {
  constructor() {
    this.httpClient = new HttpClient(process.env.REACT_APP_API_URL);
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
