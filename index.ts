import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import connect from "./src/db/connection";
import TaskRoute from "./src/routes/TaskRoute";
import SectionRoute from "./src/routes/SectionRoute";

connect();

const typeDefs = gql`
  type Query {
    ${TaskRoute.queries}
    ${SectionRoute.queries}
  }
  type Mutation {
    ${TaskRoute.mutations}
    ${SectionRoute.mutations}
  }
  ${TaskRoute.types}
  ${SectionRoute.types}
`;

const resolvers = {
  Query: {
    ...TaskRoute.queryResolvers,
    ...SectionRoute.queryResolvers,
  },
  Mutation: {
    ...TaskRoute.mutationResolvers,
    ...SectionRoute.mutationResolvers,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

const app = express();

server.applyMiddleware({ app, path: "/" });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
