import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req: any, next) => {
  console.log('I am Auth Interceptor');

  const myToken = 'ABCDEF123456';
  const requestWithToken = req.clone({
    setHeaders: { Authorization: `Bearer ${myToken}` },
  });
  return next(requestWithToken);
};
