import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PresupuestoComponent} from './presupuesto.component';
import {PresupuestoRoutingModule} from './presupuesto-routing.module';
import {MainComponent} from './components/main/main.component';



@NgModule({
  declarations: [PresupuestoComponent,MainComponent],
  imports: [
    CommonModule,
    PresupuestoRoutingModule
  ]
})
export class PresupuestoModule { }
