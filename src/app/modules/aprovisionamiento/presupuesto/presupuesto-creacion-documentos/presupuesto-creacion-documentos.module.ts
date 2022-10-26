import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PresupuestoCreacionDocumentosComponent} from './presupuesto-creacion-documentos.component';
import {PresupuestoCreacionDocumentosRoutingModule} from './presupuesto-creacion-documentos-routing.module';



@NgModule({
  declarations: [PresupuestoCreacionDocumentosComponent],
  imports: [
    CommonModule,
    PresupuestoCreacionDocumentosRoutingModule
  ]
})
export class PresupuestoCreacionDocumentosModule { }
