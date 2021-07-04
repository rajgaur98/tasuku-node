import { format } from "date-fns";
import TaskModel from "../models/TaskModel";

class TaskService {
  static getTasks = async (args: any) => {
    try {
      if (args.id) {
        return await TaskModel.findOne({ _id: args.id });
      } else if (args.sectionId) {
        return await TaskModel.find({ sectionId: args.sectionId });
      }
      return await TaskModel.find();
    } catch (err) {
      console.log(err);
    }
  };

  static createTask = async (args: any) => {
    try {
      await TaskModel.create({
        sectionId: args.sectionId,
        name: args.name,
        description: args.description,
        status: args.status,
        priority: args.priority,
        dueDate: args.dueDate,
        createdOn: format(new Date(), "MM/dd/yyyy"),
      });
    } catch (err) {
      console.log(err);
    }
  };

  static updateTask = async (args: any) => {
    try {
      await TaskModel.updateOne(
        { _id: args.id },
        {
          sectionId: args.sectionId,
          name: args.name,
          description: args.description,
          status: args.status,
          priority: args.priority,
          dueDate: args.dueDate,
          createdOn: args.createdOn,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  static deleteTask = async (args: any) => {
    try {
      await TaskModel.deleteOne({ _id: args.id });
    } catch (err) {
      console.log(err);
    }
  };
}

export default TaskService;
