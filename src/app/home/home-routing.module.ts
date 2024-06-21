import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './components/panel/panel.component';
import { CallComponent } from './components/call/call.component';

const routes: Routes = [
  {
    path:'',
    component:PanelComponent
  },
  {
    path:'sobre/:id',
    component:CallComponent
  },
  
  {path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
