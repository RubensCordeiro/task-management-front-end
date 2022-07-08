import HttpClient from "./utils/HttpClient";

class TaskService {
  constructor() {
    this.httpClient = new HttpClient(process.env.REACT_APP_API_URL);
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
      `api/v1/tasks/task/${task_id}`,
      auth_token
    );
    return response;
  }

  async createTask(task, auth_token) {
    const response = await this.httpClient.post(
      "api/v1/tasks",
      auth_token,
      JSON.stringify({ task: task })
    );
    return response;
  }

  async editTask(taskId, task, auth_token) {
    const response = await this.httpClient.patch(
      `api/v1/tasks/${taskId}`,
      auth_token,
      JSON.stringify({ task: task })
    );
    return response;
  }

  async deleteTask(taskId, auth_token) {
    const response = await this.httpClient.delete(
      `api/v1/tasks/${taskId}`,
      auth_token
    );
    return response;
  }
}

export default new TaskService();
