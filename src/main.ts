import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log(process.env.APP_PORT);
async function bootstrap() {
const app = await NestFactory.create(AppModule);

app.setGlobalPrefix('api/v1');
await app.listen(process.env.APP_PORT || 5000);
}
bootstrap();
