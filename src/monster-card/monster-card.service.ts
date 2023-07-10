import { Injectable } from '@nestjs/common'
import { MonsterCard } from './entities/monster-card.entity'
import { HttpService } from '@nestjs/axios'
import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'

@Injectable()
export class MonsterCardService {
    constructor(private readonly httpService: HttpService) {}

    private readonly monsterCards: MonsterCard[] = []

    findAll(): Observable<AxiosResponse<MonsterCard[]>> {
        console.log(`This action returns all monsterCards`)
        return this.httpService.get(
            'https://db.ygoprodeck.com/api/v7/cardinfo.php'
        )
    }

    findOneMonsterCardByName(name: string) {
        console.log(`This action returns single MonsterCard`)
        // TODO: API fetch to /:name endpoint
        // e.g. https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon
    }
}
