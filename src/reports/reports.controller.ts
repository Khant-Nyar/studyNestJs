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
    @Param('type', new ParseEnumPipe(ReportsType)) type: string,
  ): ReportResponseDto[] {
    const reportsType =
      type === 'income' ? ReportsType.INCOME : ReportsType.EXPENSE;
    return this.reportsService.getAllReports(reportsType);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportsType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    console.log(id, typeof id);

    const reportsType =
      type === 'income' ? ReportsType.INCOME : ReportsType.EXPENSE;
    return this.reportsService.getReportById(reportsType, id);
  }

  @Post()
  creteReport(
    @Body() { amount, source }: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportsType)) type: string,
  ): ReportResponseDto {
    const reportsType =
      type === 'income' ? ReportsType.INCOME : ReportsType.EXPENSE;
    return this.reportsService.creteReport(reportsType, { amount, source });
  }
  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportsType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto,
  ): ReportResponseDto {
    const reportsType =
      type === 'income' ? ReportsType.INCOME : ReportsType.EXPENSE;
    return this.reportsService.updateReport(reportsType, id, body);
  }
  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportsService.deleteReport(id);
  }
  // @Post()
  // create(@Body() createReportDto: CreateReportDto) {
  //   return this.reportsService.create(createReportDto);
  // }

  // @Get()
  // findAll() {
  //   return this.reportsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.reportsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
  //   return this.reportsService.update(+id, updateReportDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reportsService.remove(+id);
  // }
}
