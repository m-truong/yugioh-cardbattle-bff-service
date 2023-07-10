import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonsterCardService } from './monster-card.service';
import { CreateMonsterCardDto } from './dto/create-monster-card.dto';
import { UpdateMonsterCardDto } from './dto/update-monster-card.dto';

@Controller('monster-card')
export class MonsterCardController {
  constructor(private readonly monsterCardService: MonsterCardService) {}

  @Post()
  create(@Body() createMonsterCardDto: CreateMonsterCardDto) {
    return this.monsterCardService.create(createMonsterCardDto);
  }

  @Get()
  findAll() {
    return this.monsterCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monsterCardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMonsterCardDto: UpdateMonsterCardDto) {
    return this.monsterCardService.update(+id, updateMonsterCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monsterCardService.remove(+id);
  }
}
