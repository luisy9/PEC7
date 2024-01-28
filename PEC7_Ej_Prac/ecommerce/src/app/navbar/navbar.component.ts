import { Component, inject } from '@angular/core';
import { UserStoreService } from '../services/user-store/user-store.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public isMenuOpen = false;
  public userService = inject(UserStoreService);

  get _isUserLogged() {
    return this.userService.userIsLogged;
  }

  onLogoutUser() {
    this.userService.logoutUser();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
