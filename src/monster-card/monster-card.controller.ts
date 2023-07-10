import {
  Controller,
  Get,
  Body,
  Param,
  Req,
  Res,
  HttpCode,
  Redirect,
} from '@nestjs/common'
import { MonsterCardService } from './monster-card.service'
import { MonsterCard } from './entities/monster-card.entity'

@Controller('monster-card') // path-prefix; groups related routes together
export class MonsterCardController {
  // NOTE: all static paths MUST be declared BEFORE the PARAMETERIZED routes to prevent intercepting traffic.

  constructor(private readonly monsterCardService: MonsterCardService) {}

  @Get()
  @HttpCode(200) // custom http code
  // @Redirect('https://nestjs.com', 301) // option reroute
  findAll(@Req() request: Request): MonsterCard[] {
    console.log('logging findAll() request', request);
    // return this.monsterCardService.findAll();
  }

  // route is '/monster-card/:name
  // @Get(':name') // dynamic argument?
  // @HttpCode(200)
  // findOneMonsterCardByName(@Param('name') name: string) {
  //   console.log('logging inside findOne() param', name);
  //   return this.monsterCardService.findOneMonsterCardByName(name);
  // }
}
