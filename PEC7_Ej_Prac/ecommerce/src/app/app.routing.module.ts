import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

//Creamos el archivo de app.routing.module.ts para crear todas las rutas
/* La ruta por defecto sera la ruta de login, esto quiere decir que el componente de login
se cargara por defecto, luego la opcion de login al hacer click sobre ella se cargara el componente de login
luego si hacemos click en la de register se cargara la de register
Article List path: ‘article/list’,
Create Article path: ‘newArticleCreate’,
Detalle del articulo: article/:id
*/
const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./user-module/user-module.module').then(module => module.UserModuleModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./user-module/user-module.module').then(module => module.UserModuleModule)
    },
    {
        path: '',
        loadChildren: () => import('./article-module/article-module.module').then(module => module.ArticleModuleModule)
    },
    {
        path: '',
        loadChildren: () => import('./forms-module/forms-module.module').then(module => module.FormsModuleModule)
    },
    {
        path: '',
        loadChildren: () => import('./forms-module/forms-module.module').then(module => module.FormsModuleModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }