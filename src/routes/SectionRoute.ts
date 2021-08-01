import SectionController from "../controllers/SectionController";

const SectionRoute = {
  queries: `
    getSections(id: String): [Section]
  `,

  mutations: `
    createSection(name: String, description: String): Section
    updateSection(id: String, name: String, description: String): Section
    deleteSection(id: String): Section
  `,

  types: `
    type Section {
      id: String
      name: String
      description: String
    }
  `,

  queryResolvers: {
    getSections: async (_: any, args: any) => {
      return await SectionController.getSections(args);
    },
  },

  mutationResolvers: {
    updateSection: async (_: any, args: any) => {
      return await SectionController.updateSection(args);
    },
    deleteSection: async (_: any, args: any) => {
      return await SectionController.deleteSection(args);
    },
    createSection: async (_: any, args: any) => {
      return await SectionController.createSection(args);
    },
  },
};

export default SectionRoute;
