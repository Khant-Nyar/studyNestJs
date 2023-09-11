import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
// import { CustomInterceptor } from './custom.interceptor';
import { ReportsService } from './reports/reports.service';
import { ReportsModule } from './reports/reports.module';
import { SummaryModule } from './summary/summary.module';
import { SummaryService } from './summary/summary.service';

@Module({
  imports: [ReportsModule, SummaryModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    ReportsService,
    SummaryService,
  ],
})
export class AppModule {}
