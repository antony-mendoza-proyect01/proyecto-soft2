import {createAction, props} from '@ngrx/store';
import { ApiResponse } from 'src/app/data/models/api-response';
import {Pais} from '../../data/models/pais';

export enum PaisActionsNames {
  Init = '[Pais] Init',
  GetAllPais = '[Pais] [Api] Get all',
  GetAllPaisSuccess = '[Pais] [Api] Get all Success',
  GetAllPaisFailure = '[Pais] [Api] Get all Failure',

}

export const initPais = createAction( PaisActionsNames.Init);

export const getAllPais = createAction(PaisActionsNames.GetAllPais);

export const getAllPaisSuccess = createAction(
  PaisActionsNames.GetAllPaisSuccess,
  props<{ pais: Pais[]  }>()
);

export const getAllPaisFailure = createAction(
  PaisActionsNames.GetAllPaisFailure,
  props<{  error: string   }>()
);
