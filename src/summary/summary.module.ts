import { Module } from '@nestjs/common';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';
import { ReportsModule } from 'src/reports/reports.module';

@Module({
  imports: [ReportsModule],
  controllers: [SummaryController],
  providers: [SummaryService],
  exports: [],
})
export class SummaryModule {}
