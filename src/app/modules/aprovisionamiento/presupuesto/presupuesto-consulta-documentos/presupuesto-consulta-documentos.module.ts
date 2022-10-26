import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PresupuestoConsultaDocumentosComponent} from './presupuesto-consulta-documentos.component';
import {PresupuestoConsultaDocumentosRoutingModule} from './presupuesto-consulta-documentos-routing.module';
import {FormComponent} from './components/form/form.component';
import {ListadoComponent} from './components/listado/listado.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    PresupuestoConsultaDocumentosComponent,
    FormComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    PresupuestoConsultaDocumentosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PresupuestoConsultaDocumentosModule { }
