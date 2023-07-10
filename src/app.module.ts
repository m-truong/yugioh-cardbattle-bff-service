import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MonsterCardModule } from './monster-card/monster-card.module';
import { MonsterCardController } from './monster-card/monster-card.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MonsterCardModule,
  ],
  controllers: [MonsterCardController],
  providers: [],
})
export class AppModule {}
