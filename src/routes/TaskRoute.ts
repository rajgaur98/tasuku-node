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
      order: Int
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
      order: Int
    ): [Task]
    updateTasks(tasks: [TaskInput]): [Task]
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
      order: Int
    }
    input TaskInput {
      id: String
      sectionId: String
      name: String
      description: String
      status: String
      priority: String
      dueDate: String
      createdOn: String
      order: Int
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
    updateTasks: async (_: any, args: any) => {
      return await TaskController.updateTasks(args);
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
