import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPage } from './landing/landing.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule),
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
