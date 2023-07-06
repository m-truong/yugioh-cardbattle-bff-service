import { Logger } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { MonsterCard, MonsterData } from './monster-card.schema';

@Resolver(() => MonsterCard)
export class MonsterCardResolver {
  private readonly logger = new Logger(MonsterCardResolver.name);

  // TODO: add monsterCardService constructor
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Query(() => MonsterCard)
  async getMonsterCard() {
    this.logger.verbose('in Query for getMonsterCard');

    // await return this.monsterCardService.
  }

  @ResolveField()
  async monsterName(@Parent() monsterCard: MonsterCard) {
    this.logger.verbose('in ResolveField for monsterName');
  }

  @ResolveField()
  async monsterType(@Parent() monsterCard: MonsterCard) {
    this.logger.verbose('in ResolveField for monsterType');
  }

  // TODO: add Resolver field functions ...
}
