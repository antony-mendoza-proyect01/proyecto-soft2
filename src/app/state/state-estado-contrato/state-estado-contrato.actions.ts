import {createAction, props} from '@ngrx/store';
import {EstadoContrato} from '../../data/models/estado-contrato';

export enum EstadoContratoActionsNames {
  Init = '[EstadoContrato] Init',
  GetAllEstadoContrato = '[EstadoContrato] [Api] Get all',
  GetAllEstadoContratoSuccess = '[EstadoContrato] [Api] Get all Success',
  GetAllEstadoContratoFailure = '[EstadoContrato] [Api] Get all Failure',

}

export const initEstadoContrato = createAction( EstadoContratoActionsNames.Init);

export const getAllEstadoContrato = createAction(EstadoContratoActionsNames.GetAllEstadoContrato);

export const getAllEstadoContratoSuccess = createAction(
  EstadoContratoActionsNames.GetAllEstadoContratoSuccess,
  props<{ estadoContrato: EstadoContrato[]  }>()
);

export const getAllEstadoContratoFailure = createAction(
  EstadoContratoActionsNames.GetAllEstadoContratoFailure,
  props<{  error: string   }>()
);
