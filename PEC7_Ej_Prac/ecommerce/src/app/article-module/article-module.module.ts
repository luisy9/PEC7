import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleModuleRoutingModule } from './article-module-routing.module';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleComponent } from '../article/article.component';
import { ValidImgPipePipe } from '../pipe/valid-img-pipe.pipe';
import { ArticleItemComponent } from '../article-item/article-item.component';


@NgModule({
  declarations: [ ArticleListComponent, ArticleComponent, ArticleItemComponent, ValidImgPipePipe ],
  imports: [
    CommonModule,
    ArticleModuleRoutingModule,
  ]
})
export class ArticleModuleModule {
  constructor(){
    console.log('ArticleModuleModule');
  }
}
