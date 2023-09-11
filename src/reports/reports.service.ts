import { Injectable, NotFoundException } from '@nestjs/common';
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
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportsType, id: string): ReportResponseDto | undefined {
    const report = data.reports
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!report) {
      throw new NotFoundException('Report not found');
    }

    return new ReportResponseDto(report);
  }

  createReport(
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
  ): ReportResponseDto | undefined {
    const reportToUpdate = data.reports
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) {
      throw new NotFoundException('Report not found');
    }

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

  deleteReport(id: string): void {
    const reportIndex = data.reports.findIndex((report) => report.id === id);

    if (reportIndex === -1) {
      throw new NotFoundException('Report not found');
    }

    data.reports.splice(reportIndex, 1);
  }
}
