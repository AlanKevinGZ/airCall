import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PanelComponent } from './components/panel/panel.component';
import { CallComponent } from './components/call/call.component';



@NgModule({
  declarations: [
   
  
    PanelComponent,
            CallComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
