import TaskService from "../services/TaskService";

class TaskController {
  static getTasks = async (args: any) => {
    return await TaskService.getTasks(args);
  };

  static createTask = async (args: any) => {
    await TaskService.createTask(args);
  };

  static updateTask = async (args: any) => {
    await TaskService.updateTask(args);
  };

  static updateTasks = async (args: any) => {
    await TaskService.updateTasks(args);
  };

  static deleteTask = async (args: any) => {
    await TaskService.deleteTask(args);
  };
}

export default TaskController;
