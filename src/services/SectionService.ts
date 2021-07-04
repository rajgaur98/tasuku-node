import SectionModel from "../models/SectionModel";

class SectionService {
  static getSections = async (args: any) => {
    try {
      if (args.id) {
        return await SectionModel.findOne({ _id: args.id });
      }
      return await SectionModel.find();
    } catch (err) {
      console.log(err);
    }
  };

  static createSection = async (args: any) => {
    try {
      const section = await SectionModel.create({
        name: args.name,
        description: args.description,
      });
      return section;
    } catch (err) {
      console.log(err);
    }
  };

  static updateSection = async (args: any) => {
    try {
      return await SectionModel.updateOne(
        { _id: args.id },
        {
          name: args.name,
          description: args.description,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  static deleteSection = async (args: any) => {
    try {
      return await SectionModel.deleteOne({ _id: args.id });
    } catch (err) {
      console.log(err);
    }
  };
}

export default SectionService;
