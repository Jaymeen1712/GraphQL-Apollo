export const typeDefs = `#graphql
  type Game {
    id: ID!
    name: String!
  }
  type Query {
    games: [Game]
    game(id: ID!): Game
  }
`;
