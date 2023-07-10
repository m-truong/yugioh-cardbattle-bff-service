import { Test, TestingModule } from '@nestjs/testing';
import { MonsterCardService } from './monster-card.service';

describe('MonsterCardService', () => {
  let service: MonsterCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonsterCardService],
    }).compile();

    service = module.get<MonsterCardService>(MonsterCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
