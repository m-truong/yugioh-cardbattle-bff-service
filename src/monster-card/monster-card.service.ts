import { Injectable } from '@nestjs/common';
import { CreateMonsterCardDto } from './dto/create-monster-card.dto';
import { UpdateMonsterCardDto } from './dto/update-monster-card.dto';

@Injectable()
export class MonsterCardService {
  create(createMonsterCardDto: CreateMonsterCardDto) {
    return 'This action adds a new monsterCard';
  }

  findAll() {
    return `This action returns all monsterCard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} monsterCard`;
  }

  update(id: number, updateMonsterCardDto: UpdateMonsterCardDto) {
    return `This action updates a #${id} monsterCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} monsterCard`;
  }
}
