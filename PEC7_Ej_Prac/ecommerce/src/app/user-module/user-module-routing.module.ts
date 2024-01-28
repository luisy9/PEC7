import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { guardAccessLoginGuard } from '../guards/guard-access-login.guard';


/* Crearemos las rtutas necesarias para cargar los componentes y hacer uso de los guards para proteger las rutas
Ademas de establecer la ruta por defecto */
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent, canActivate: [guardAccessLoginGuard] },
      { path: 'register', component: RegisterComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
