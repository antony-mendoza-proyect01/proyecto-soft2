import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {getAllPais, initPais} from '../../../../state/state-pais/state-pais.actions';
import {getAllCiudadByPais, initCiudad} from '../../../../state/state-ciudad/state-ciudad.actions';
import {
  getAllEstadoContrato,
  initEstadoContrato
} from '../../../../state/state-estado-contrato/state-estado-contrato.actions';
import {
  initConsultaFactibilidades,
  postTareasPresupuestoConsultaFactibilidades, verTareaPresupuestoConsultaFactibilidades
} from './state/presupuesto-consulta-factibilidades.actions';

@Component({
  selector: 'app-presupuesto-consulta-factibilidades',
  templateUrl: './presupuesto-consulta-factibilidades.component.html',
  styleUrls: ['./presupuesto-consulta-factibilidades.component.scss']
})
export class PresupuestoConsultaFactibilidadesComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  async ngOnInit() {
    this.store.dispatch(initConsultaFactibilidades());
    this.store.dispatch(initPais());
    this.store.dispatch(getAllPais());

    this.store.dispatch(initCiudad());

    this.store.dispatch(initEstadoContrato());
    this.store.dispatch(getAllEstadoContrato());
  }

  searchCity(idCiudad: string) {
    this.store.dispatch(getAllCiudadByPais({idCiudad}));
  }

  searchTareasPresupuesto(consulta) {
    this.store.dispatch(postTareasPresupuestoConsultaFactibilidades({consulta}));
  }

  verTarea(edit) {
    this.store.dispatch(verTareaPresupuestoConsultaFactibilidades({edit}));
  }

}
