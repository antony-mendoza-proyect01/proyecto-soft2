import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.state';
import {getAllPais, initPais} from '../../../../state/state-pais/state-pais.actions';
import {getAllCiudadByPais, initCiudad} from '../../../../state/state-ciudad/state-ciudad.actions';
import {
  getAllEstadoContrato,
  initEstadoContrato
} from '../../../../state/state-estado-contrato/state-estado-contrato.actions';
import {initConsultaDocumentos, postConsultaDocumentos} from './state/presupuesto-consulta-documentos.actions';

@Component({
  selector: 'app-presupuesto-consulta-documentos',
  templateUrl: './presupuesto-consulta-documentos.component.html',
  styleUrls: ['./presupuesto-consulta-documentos.component.scss']
})
export class PresupuestoConsultaDocumentosComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  async ngOnInit() {
    this.store.dispatch(initConsultaDocumentos());
    this.store.dispatch(initPais());
    this.store.dispatch(getAllPais());

    this.store.dispatch(initCiudad());

    this.store.dispatch(initEstadoContrato());
    this.store.dispatch(getAllEstadoContrato());
  }

  searchCity(idCiudad: string) {
    this.store.dispatch(getAllCiudadByPais({idCiudad}));
  }

  searchConsulta(consulta) {
    this.store.dispatch(postConsultaDocumentos({consulta}));
  }
}
