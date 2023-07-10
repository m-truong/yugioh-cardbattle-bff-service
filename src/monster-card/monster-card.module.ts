import { Module } from '@nestjs/common';
import { MonsterCardService } from './monster-card.service';
import { MonsterCardController } from './monster-card.controller';

@Module({
  controllers: [MonsterCardController],
  providers: [MonsterCardService],
})
export class MonsterCardModule {}
