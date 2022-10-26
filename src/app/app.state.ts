import { LoginState } from "./modules/login/state/login.state";
import {ActionReducerMap} from '@ngrx/store';
import {loginReducer} from './modules/login/state/login.reducer';
import {LoginEffects} from './modules/login/state/login.effects';
import {
  ConsultaFactibilidadesState
} from "./modules/aprovisionamiento/presupuesto/presupuesto-consulta-factibilidades/state/presupuesto-consulta-factibilidades.state";
import {
  ConsultaFactibilidadesReducer
} from "./modules/aprovisionamiento/presupuesto/presupuesto-consulta-factibilidades/state/presupuesto-consulta-factibilidades.reducer";
import {
  ConsultaFactibilidadesEffects
} from "./modules/aprovisionamiento/presupuesto/presupuesto-consulta-factibilidades/state/presupuesto-consulta-factibilidades.effects";
import {PaisState} from './state/state-pais/state-pais.state';
import {PaisReducer} from './state/state-pais/state-pais.reducer';
import {PaisEffects} from './state/state-pais/state-pais.effects';
import {CiudadState} from './state/state-ciudad/state-ciudad.state';
import {CiudadReducer} from './state/state-ciudad/state-ciudad.reducer';
import {CiudadEffects} from './state/state-ciudad/state-ciudad.effects';
import {EstadoContratoState} from './state/state-estado-contrato/state-estado-contrato.state';
import {EstadoContratoReducer} from './state/state-estado-contrato/state-estado-contrato.reducer';
import {EstadoContratoEffects} from './state/state-estado-contrato/state-estado-contrato.effects';
import {
  ConsultaDocumentosState
} from './modules/aprovisionamiento/presupuesto/presupuesto-consulta-documentos/state/presupuesto-consulta-documentos.state';
import {
  ConsultaDocumentosReducer
} from './modules/aprovisionamiento/presupuesto/presupuesto-consulta-documentos/state/presupuesto-consulta-documentos.reducer';
import {
  ConsultaDocumentosEffects
} from './modules/aprovisionamiento/presupuesto/presupuesto-consulta-documentos/state/presupuesto-consulta-documentos.effects';


export interface AppState {
  // structura inicial
  login: LoginState;

  paisState: PaisState,
  ciudadState: CiudadState,
  estadoContratoState: EstadoContratoState,

  ConsultaFactibilidadesState: ConsultaFactibilidadesState,
  ConsultaDocumentosState :ConsultaDocumentosState,
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  // structura inicial
  login: loginReducer,

  //independientes
  paisState: PaisReducer,
  ciudadState: CiudadReducer,
  estadoContratoState: EstadoContratoReducer,

  ConsultaFactibilidadesState:ConsultaFactibilidadesReducer,
  ConsultaDocumentosState:ConsultaDocumentosReducer,

};
export const ROOT_EFFECT = [
  // structura inicial
  LoginEffects,

  PaisEffects,
  CiudadEffects,
  EstadoContratoEffects,

  ConsultaFactibilidadesEffects,
  ConsultaDocumentosEffects,
];
