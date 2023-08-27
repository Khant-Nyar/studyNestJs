import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ModuleModule } from './modules/modules.modules';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            // envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
        DatabaseModule,
        ModuleModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
