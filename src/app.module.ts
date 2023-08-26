import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            // envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
        DatabaseModule,
        ItemsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
