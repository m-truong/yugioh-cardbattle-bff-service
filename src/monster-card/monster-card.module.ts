import { Module } from '@nestjs/common'
import { MonsterCardService } from './monster-card.service'
import { MonsterCardController } from './monster-card.controller'
import { HttpModule } from '@nestjs/axios'

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ], // add import of axios HTTPModule
    controllers: [MonsterCardController],
    providers: [MonsterCardService],
})
export class MonsterCardModule {}
