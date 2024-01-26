import { Injectable } from '@angular/core';
import { UserService } from '../users/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserStoreService {

  private data$!: Observable<string>;

  constructor(private dataIsLoggedUser: UserService) {
    this.data$ = dataIsLoggedUser.isLoggedUserGetter;
  }

  //Funcion para almacenar en el localStorage dependiendo si le llega un token o no, esto quiere decir que se ha iniciado session con el usuario o no.
  isLoggedUser() {
    this.data$.subscribe((token: string) => {
      if (token.length > 0) {
        const userData: {isLogged: boolean; token: string} = {
          isLogged: true,
          token
        }
        const loadUserData = localStorage.setItem('user-info', JSON.stringify(userData));
      }
    })
  }
}
