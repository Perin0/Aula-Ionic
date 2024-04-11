import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   
  {
    path: 'emag-page',
    loadChildren: () => import('./emag-page/emag-page.module').then( m => m.EmagPagePageModule)
  },
  {
    path: 'mass-page',
    loadChildren: () => import('./mass-page/mass-page.module').then( m => m.MassPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
