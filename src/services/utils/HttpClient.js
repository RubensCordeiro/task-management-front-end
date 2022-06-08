class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.handledErrors = [403];
  }

  async get(path, auth_token) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: {
        Authorization: auth_token,
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
}

export default HttpClient;