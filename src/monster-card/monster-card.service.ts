import { Injectable } from '@nestjs/common';
import { MonsterCard } from './entities/monster-card.entity';

@Injectable()
export class MonsterCardService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}

    private readonly monsterCards: MonsterCard[] = [];

    findAll() {
        console.log(`This action returns all monsterCards`)
        // TODO: make an API fetch request to the yugioh pro-deck
        // https://db.ygoprodeck.com/api/v7/cardinfo.php
        // return this.axios.get()
    }

    findOneMonsterCardByName(name: string) {
        console.log(`This action returns single MonsterCard`)
        // TODO: API fetch to /:name endpoint
        // e.g. https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon
    }
}
