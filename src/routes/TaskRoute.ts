import TaskController from "../controllers/TaskController";

const TaskRoute = {
  queries: `
    getTasks(id: String, sectionId: String): [Task]
  `,

  mutations: `
    createTask(
      sectionId: String
      name: String
      description: String
      status: String
      priority: String
      dueDate: String
    ): [Task]
    updateTask(
      id: String
      sectionId: String
      name: String
      description: String
      status: String
      priority: String
      dueDate: String
      createdOn: String
    ): [Task]
    deleteTask(id: String): [Task]
  `,

  types: `
    type Task {
      id: String
      sectionId: String
      name: String
      description: String
      status: String
      priority: String
      dueDate: String
      createdOn: String
    }
  `,

  queryResolvers: {
    getTasks: async (_: any, args: any) => {
      return await TaskController.getTasks(args);
    },
  },

  mutationResolvers: {
    updateTask: async (_: any, args: any) => {
      return await TaskController.updateTask(args);
    },
    deleteTask: async (_: any, args: any) => {
      return await TaskController.deleteTask(args);
    },
    createTask: async (_: any, args: any) => {
      return await TaskController.createTask(args);
    },
  },
};

export default TaskRoute;
