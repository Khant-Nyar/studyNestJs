import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (ConfigService: ConfigService) => ({
                type: `mysql`,
                host: ConfigService.getOrThrow('MYSQL_HOST'),
                port: ConfigService.getOrThrow('MYSQL_PORT'),
                database: ConfigService.getOrThrow('MYSQL_DATABASE'),
                username: ConfigService.getOrThrow('MYSQL_USER'),
                password: ConfigService.getOrThrow('MYSQL_PASSWORD'),
                synchronize: ConfigService.getOrThrow('MYSQL_SYNCHRONIZE'),
                autoLoadEntities: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
