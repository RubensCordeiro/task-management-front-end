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

  async post(path, auth_token, payload) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: {
        Authorization: auth_token,
        "Content-Type": "application/json",
      },
      body: payload,
    });
    return response.json();
  }

  async patch(path, auth_token, payload) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "PATCH",
      headers: {
        Authorization: auth_token,
        "Content-Type": "application/json",
      },
      body: payload,
    });
    return response.json();
  }
}

export default HttpClient;
