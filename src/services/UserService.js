import HttpClient from "./utils/HttpClient";

class UserService {
  constructor(baseUrl) {
    this.httpClient = new HttpClient("http://127.0.0.1:3000/");
  }

  async checkEmailExistence(email) {
    const formatedEmail = email.replace(".", "-£");
    const response = await this.httpClient.postFree(
      `api/v1/users/email_checker`,
      JSON.stringify({ email: formatedEmail })
    );
    return response;
  }

  async createUser(userData) {
    const response = await this.httpClient.postFree(
      '/api/v1/registration',
      JSON.stringify(userData)
    );
    return response
  }

}

export default new UserService();
