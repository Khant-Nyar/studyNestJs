import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  ParseEnumPipe,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import {
  CreateReportDto,
  ReportResponseDto,
  UpdateReportDto,
} from './dto/report.dto';
import { ReportsType } from 'src/data';

@Controller('reports/:type')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportsType)) type: ReportsType,
  ): ReportResponseDto[] {
    return this.reportsService.getAllReports(type);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportsType)) type: ReportsType,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto | undefined {
    return this.reportsService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Body() { amount, source }: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportsType)) type: ReportsType,
  ): ReportResponseDto {
    return this.reportsService.createReport(type, { amount, source });
  }

  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportsType)) type: ReportsType,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto,
  ): ReportResponseDto | undefined {
    return this.reportsService.updateReport(type, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string): void {
    this.reportsService.deleteReport(id);
  }
}
