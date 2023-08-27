import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.modules';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            // envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
        DatabaseModule,
        ApiModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
