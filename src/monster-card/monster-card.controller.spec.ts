import { Test, TestingModule } from '@nestjs/testing';
import { MonsterCardController } from './monster-card.controller';
import { MonsterCardService } from './monster-card.service';

describe('MonsterCardController', () => {
  let controller: MonsterCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonsterCardController],
      providers: [MonsterCardService],
    }).compile();

    controller = module.get<MonsterCardController>(MonsterCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
