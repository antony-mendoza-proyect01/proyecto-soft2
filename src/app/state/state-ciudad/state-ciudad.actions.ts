import {createAction, props} from '@ngrx/store';
import {Ciudad} from '../../data/models/Ciudad';

export enum CiudadActionsNames {
  Init = '[Ciudad] Init',
  GetAllCiudadByPais = '[Ciudad] [Api] Get all',
  GetAllCiudadByPaisSuccess = '[Ciudad] [Api] Get all Success',
  GetAllCiudadByPaisFailure = '[Ciudad] [Api] Get all Failure',

}

export const initCiudad = createAction( CiudadActionsNames.Init);

export const getAllCiudadByPais = createAction(
  CiudadActionsNames.GetAllCiudadByPais,
  props<{ idCiudad: string  }>()
);

export const getAllCiudadByPaisSuccess = createAction(
  CiudadActionsNames.GetAllCiudadByPaisSuccess,
  props<{ ciudad: Ciudad[]  }>()
);

export const getAllCiudadByPaisFailure = createAction(
  CiudadActionsNames.GetAllCiudadByPaisFailure,
  props<{  error: string   }>()
);
