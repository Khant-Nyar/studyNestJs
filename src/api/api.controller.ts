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
export class ApiController {
    @Get()
    async findAll() {
        return "got it";
    }
}
