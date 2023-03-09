import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { resolvers } from "./features";
import * as dotenv from "dotenv";
import typeDefs from "./graphql";

dotenv.config();

async function main(port: number | string) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(cors(), bodyParser.json(), expressMiddleware(server));

  await new Promise(() =>
    httpServer.listen({ port: +port }, () => {
      console.log(`🚀 Server ready at http://localhost:${port}`);
    })
  );
}

main(process.env.PORT || 4000);
