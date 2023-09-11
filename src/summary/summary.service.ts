import { ReportsService } from 'src/reports/reports.service';
import { Injectable } from '@nestjs/common';
import { ReportsType } from 'src/data';

@Injectable()
export class SummaryService {
  constructor(private readonly reportsService: ReportsService) {}

  getcalculateSummary() {
    const totalExpense = this.reportsService
      .getAllReports(ReportsType.EXPENSE)
      .reduce((sum, report) => sum + report.amount, 0);
    const totalIncome = this.reportsService
      .getAllReports(ReportsType.INCOME)
      .reduce((sum, report) => sum + report.amount, 0);

    return {
      totalIncome,
      totalExpense,
      netIncome: totalIncome - totalExpense,
    };
  }
}
