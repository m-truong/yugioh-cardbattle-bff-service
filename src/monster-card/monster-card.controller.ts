import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { MonsterCardService } from './monster-card.service';
import { CreateMonsterCardDto } from './dto/create-monster-card.dto';
import { UpdateMonsterCardDto } from './dto/update-monster-card.dto';
import { MonsterCard } from './entities/monster-card.entity';

@Controller('monster-card') // path-prefix; groups related routes together
export class MonsterCardController {
  constructor(private readonly monsterCardService: MonsterCardService) {}

  @Get()
  findAll(@Req() request: Request): MonsterCard[] {
    console.log('logging findAll() request', request);
    return this.monsterCardService.findAll();
  }

  // route is '/monster-card/:name
  @Get(':name') // dynamic argument?
  findOneByName(@Param('name') name: string) {
    return this.monsterCardService.findOne(+name);
  }

  // @Post()
  // create(@Body() createMonsterCardDto: CreateMonsterCardDto) {
  //   return this.monsterCardService.create(createMonsterCardDto);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateMonsterCardDto: UpdateMonsterCardDto,
  // ) {
  //   return this.monsterCardService.update(+id, updateMonsterCardDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.monsterCardService.remove(+id);
  // }
}
