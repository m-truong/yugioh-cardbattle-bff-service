// pseudo:
// define the nestjs/graphql graphql type schema using the yugiohAPI
//

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MonsterCard {
  @Field()
  monsterName: string;

  @Field()
  monsterType: string;
}

@ObjectType()
export class MonsterData {
  @Field()
  monsterAtk: number;

  @Field()
  monsterDef: number;
}
