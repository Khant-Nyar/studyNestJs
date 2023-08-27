import { Module } from "@nestjs/common";
import { ItemsModule } from "./items/items.module";
import { ModuleController } from "./modules.controller";

@Module({
    imports: [
        ItemsModule,
    ],
    controllers: [ModuleController],
    providers: [],
})
export class ModuleModule {}