import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleItemComponent } from '../article-item/article-item.component';

/* Creamos las rutas para cargar los componentes de article list y el article details */

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'article/list', component: ArticleListComponent },
      { path: 'article/:id', component: ArticleItemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleModuleRoutingModule { }
