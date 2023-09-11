import { Injectable } from '@nestjs/common';
import { ReportResponseDto } from './dto/report.dto';
import { ReportsType, data } from 'src/data';
import { v4 as uuid } from 'uuid';

interface Report {
  amount: number;
  source: string;
}
interface UpdateReport {
  amount?: number;
  source?: string;
}
@Injectable()
export class ReportsService {
  getAllReports(type: ReportsType): ReportResponseDto[] {
    return data.reports
      .filter((reports) => reports.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportsType, id: string): ReportResponseDto {
    const report = data.reports
      .filter((reports) => reports.type === type)
      .find((reports) => reports.id === id);
    // if (!report) return;
    return new ReportResponseDto(report as Partial<ReportResponseDto>);
    // return new ReportResponseDto(report);
  }

  creteReport(
    type: ReportsType,
    { amount, source }: Report,
  ): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source,
      amount,
      create_at: new Date(),
      update_at: new Date(),
      type: type,
    };
    data.reports.push(newReport);
    return new ReportResponseDto(newReport);
  }

  updateReport(
    type: ReportsType,
    id: string,
    body: UpdateReport,
  ): ReportResponseDto {
    const reportToUpdate = data.reports
      .filter((reports) => reports.type === type)
      .find((reports) => reports.id === id);
    // if (!reportToUpdate) return;
    const reportIndex = data.reports.findIndex(
      (report) => report.id === reportToUpdate?.id,
    );
    data.reports[reportIndex] = {
      ...data.reports[reportIndex],
      ...body,
      update_at: new Date(),
    };
    return new ReportResponseDto(data.reports[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.reports.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.reports.splice(reportIndex, 1);
    return;
  }
}
