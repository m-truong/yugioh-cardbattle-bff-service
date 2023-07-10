import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'

import { LogLevel } from '@nestjs/common'
// import ddTrace from 'dd-trace';

// note: always just do 'npm install'
//  in order to install required dependencies for any project

async function bootstrap() {
    // const app = await NestFactory.create(AppModule);
    const LOG_LEVEL = (process.env.LOG_LEVEL as LogLevel) || 'error'

    const app = await NestFactory.create(AppModule, {
        logger: [LOG_LEVEL],
    })

    app.enableCors()
    const configService = app.get(ConfigService)
    await app.listen(configService.get<number>('PORT') || 3000)
}
bootstrap()
