export const typeDefs = `#graphql
  type Query {
    hello(a: String!): String
  }

  type Mutation {
    updateName(a: String!): String
  }
`;
