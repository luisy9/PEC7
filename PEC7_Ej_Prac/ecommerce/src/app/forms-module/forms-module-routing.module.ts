import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleNewTemplateComponent } from '../article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from '../article-new-reactive/article-new-reactive.component';
import { guardAccessGuard } from '../guards/guard-access.guard';

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
