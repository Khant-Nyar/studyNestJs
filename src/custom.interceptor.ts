import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        console.log({ data });
        const response = {
          ...data,
          createdAt: data.create_at,
        };
        console.log({ response });

        delete response.create_at;
        delete response.update_at;

        return response;
      }),
    );
  }
}
