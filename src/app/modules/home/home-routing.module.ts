import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {INTERNAL_PATHS} from '../../core/const/routes.conts';
import {ContainerNavigationComponent} from './components/container-navigation/container-navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MODULO} from '../../core/const/navigation.string.const';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ContainerNavigationComponent,
      },
      {
        path: INTERNAL_PATHS.APROVISIONAMIENTO,
        component: DashboardComponent,
        data: {title: MODULO.APROVISIONAMIENTO.titulo},
        loadChildren: () => import('../aprovisionamiento/aprovisionamiento/aprovisionamiento.module').then(m => m.AprovisionamientoModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
