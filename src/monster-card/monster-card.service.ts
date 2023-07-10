import { Injectable } from '@nestjs/common';
import { CreateMonsterCardDto } from './dto/create-monster-card.dto';
import { UpdateMonsterCardDto } from './dto/update-monster-card.dto';

@Injectable()
export class MonsterCardService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  create(createMonsterCardDto: CreateMonsterCardDto) {
    return 'This action adds a new monsterCard';
  }

  findAll() {
    console.log(`This action returns all monsterCard`);
    // TODO: make an API fetch request to the yugioh pro-deck
    // return this.axios
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
