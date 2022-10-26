import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PresupuestoConsultaFactibilidadesRoutingModule} from './presupuesto-consulta-factibilidades-routing.module';
import {PresupuestoConsultaFactibilidadesComponent} from "./presupuesto-consulta-factibilidades.component";
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormComponent } from './components/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../shared/shared.module';
import {FormModalFormatosComponent} from './components/form-modal-formatos/form-modal-formatos.component';
import {ListadoDocumentosComponent} from './components/listado-documentos/listado-documentos.component';



@NgModule({
  declarations: [
    PresupuestoConsultaFactibilidadesComponent,
    FormModalComponent,
    ListadoComponent,
    FormComponent,
    FormModalComponent,
    FormModalFormatosComponent,
    ListadoDocumentosComponent,
  ],
    imports: [
      CommonModule,
      PresupuestoConsultaFactibilidadesRoutingModule,
      ReactiveFormsModule,
      SharedModule
    ]
})
export class PresupuestoConsultaFactibilidadesModule { }
