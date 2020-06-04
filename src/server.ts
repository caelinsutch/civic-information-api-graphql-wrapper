import { ApolloServer, gql } from 'apollo-server';
import resolvers from './resolvers'
import {CivicAPI} from './datasource';
const { importSchema } = require('graphql-import')
const typeDefs = importSchema('src/schema.graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  dataSources: () => ({
    civicAPI: new CivicAPI()
  })
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
