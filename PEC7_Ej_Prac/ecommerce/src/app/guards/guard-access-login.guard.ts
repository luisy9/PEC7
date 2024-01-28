import { CanActivateFn } from '@angular/router';

/* En este guard lo que hacemos es mirar haber si el usuario esta autentificado o no, es decir cogemos la informacion
del localStorage y dependiendo si hay informacion o no devolvemos un true o un false */
export const guardAccessLoginGuard: CanActivateFn = (route, state): any => {
  return localStorage.getItem('user-info') ? false : true;
};
