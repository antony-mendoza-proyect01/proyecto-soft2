import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AprovisionamientoComponent} from './aprovisionamiento.component';
import {INTERNAL_PATHS} from '../../../core/const/routes.conts';
import {MODULO} from '../../../core/const/navigation.string.const';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: AprovisionamientoComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: INTERNAL_PATHS.APROVISIONAMIENTO__PRESUPUESTOS,
        data: {title: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.titulo},
        loadChildren: () => import('../presupuesto/presupuesto/presupuesto.module').then(m => m.PresupuestoModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprovisionamientoRoutingModule { }



