import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { MonsterCardResolver } from './graphql/monster-card/monster-card.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), `src/schema.gql`),
      // this sorts the schema lexicographically
      sortSchema: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  // no need for controllers since using resolvers/providers
  // controllers: [],
  // if it's a NestJs project then the provider must be a resolver
  providers: [MonsterCardResolver],
  // TODO: next add AuthGuard
})
export class AppModule {}
