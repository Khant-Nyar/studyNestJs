import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';

@Controller('')
export class ModuleController {
    @Get()
    async findAll() {
        return "got it";
    }
}
