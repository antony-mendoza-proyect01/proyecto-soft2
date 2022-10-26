import {EstadoContrato} from '../../data/models/estado-contrato';

export interface EstadoContratoState {
  loading: boolean,
  estadoContrato: EstadoContrato[],
}
