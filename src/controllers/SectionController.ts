import SectionService from "../services/SectionService";

class SectionController {
  static getSections = async (args: any) => {
    return await SectionService.getSections(args);
  };

  static createSection = async (args: any) => {
    return await SectionService.createSection(args);
  };

  static updateSection = async (args: any) => {
    return await SectionService.updateSection(args);
  };

  static deleteSection = async (args: any) => {
    return await SectionService.deleteSection(args);
  };
}

export default SectionController;
