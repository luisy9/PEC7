import { HttpInterceptorFn } from '@angular/common/http';

//Creamos el Interceptor para mandar el token de autenticacion de el usuario para que lo mande por la request.
export const atricleAppInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = localStorage.getItem('user-info');
  const authRequest = authToken ? req.clone({
    setHeaders: {
      Authorization: authToken,
    },
  }) : req;

  return next(authRequest);
};
