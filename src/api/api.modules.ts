import { Module } from "@nestjs/common";
import { ItemsModule } from "./items/items.module";
import { ApiController } from "./api.controller";

@Module({
    imports: [
        ItemsModule,
    ],
    controllers: [ApiController],
    providers: [],
})
export class ApiModule {}