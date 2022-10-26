import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PresupuestoComponent} from './presupuesto.component';
import {INTERNAL_PATHS} from '../../../../core/const/routes.conts';
import {MODULO} from '../../../../core/const/navigation.string.const';
import {MainComponent} from './components/main/main.component';
import {
  PresupuestoConsultaFactibilidadesModule
} from "../presupuesto-consulta-factibilidades/presupuesto-consulta-factibilidades.module";

const routes: Routes = [
  {
    path: '',
    component: PresupuestoComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: INTERNAL_PATHS.APROVISIONAMIENTO__PRESUPUESTOS__CREACION_DOCUMENTOS,
        data: {title: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.CREACION_DOCUMENTOS.titulo},
        loadChildren: () => import('../presupuesto-creacion-documentos/presupuesto-creacion-documentos.module').then(m => m.PresupuestoCreacionDocumentosModule)
      },
      {
        path: INTERNAL_PATHS.APROVISIONAMIENTO__PRESUPUESTOS__CONSULTA_DOCUMENTOS,
        data: {title: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.CONSULTA_DOCUMENTOS.titulo},
        loadChildren: () => import('../presupuesto-consulta-documentos/presupuesto-consulta-documentos.module').then(m => m.PresupuestoConsultaDocumentosModule)
      },
      {
        path: INTERNAL_PATHS.APROVISIONAMIENTO__PRESUPUESTOS__CONSULTA_FACTIBILIDADES,
        data: {title: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.CONSULTA_FACTIBILIDADES.titulo},
        loadChildren: () => import('../presupuesto-consulta-factibilidades/presupuesto-consulta-factibilidades.module').then(m => m.PresupuestoConsultaFactibilidadesModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresupuestoRoutingModule { }



