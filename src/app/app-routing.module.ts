import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isTokenGuard } from './auth/guard/is-token.guard';
import { isTokenPanelGuard } from './auth/guard/is-token-panel.guard';

const routes: Routes = [
  {
    path:'auth',
    canActivate:[isTokenGuard],
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'panel',
    canActivate:[isTokenPanelGuard],
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {path:"**", redirectTo:'panel'} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
