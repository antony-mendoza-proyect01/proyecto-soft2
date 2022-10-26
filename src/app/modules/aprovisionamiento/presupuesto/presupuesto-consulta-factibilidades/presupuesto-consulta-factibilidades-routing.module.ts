import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PresupuestoConsultaFactibilidadesComponent} from './presupuesto-consulta-factibilidades.component';

const routes: Routes = [
  {
    path: '',
    component: PresupuestoConsultaFactibilidadesComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresupuestoConsultaFactibilidadesRoutingModule { }



