import HttpClient from "./utils/HttpClient";

class TaskService {
  constructor() {
    this.httpClient = new HttpClient("http://127.0.0.1:3000/");
  }

  async loadTasks(pageFilter, page, auth_token) {
    const response = await this.httpClient.get(
      `api/v1/tasks/${pageFilter}/${page}`,
      auth_token
    );
    return response;
  }

  async getTask(task_id, auth_token) {
    const response = await this.httpClient.get(
      `/api/v1/tasks/task/${task_id}`,
      auth_token
    );
    return response;
  }
}

export default new TaskService();
