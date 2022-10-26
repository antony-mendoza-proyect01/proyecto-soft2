import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PresupuestoConsultaDocumentosComponent} from './presupuesto-consulta-documentos.component';

const routes: Routes = [
  {
    path: '',
    component: PresupuestoConsultaDocumentosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresupuestoConsultaDocumentosRoutingModule { }



