import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleNewTemplateComponent } from '../article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from '../article-new-reactive/article-new-reactive.component';
import { guardAccessGuard } from '../guards/guard-access.guard';


/* La ruta para crear un artículo deberá estar protegida y accesible después de
autenticarse (login), si el usuario no esta logeado no podra crear un articulo */
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'newArticleTemplate', component: ArticleNewTemplateComponent },
      { path: 'newArticleCreate', component: ArticleNewReactiveComponent, canActivate: [guardAccessGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsModuleRoutingModule { }
