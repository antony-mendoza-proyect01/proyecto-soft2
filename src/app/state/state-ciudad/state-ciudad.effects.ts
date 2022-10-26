import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import {ApiService} from 'src/app/data/services/api.service';
import {ResponseCiudades} from '../../data/models/ciudad';
import {getAllCiudadByPais, getAllCiudadByPaisFailure, getAllCiudadByPaisSuccess} from './state-ciudad.actions';


@Injectable()
export class CiudadEffects {
  getAllCiudadByPais$ = createEffect(() => this.actions$.pipe(
    ofType(getAllCiudadByPais) ,
    switchMap(async ({idCiudad}) =>
      await this.apiService.ciudadService.getByIdPais(idCiudad)
        .then((r: ResponseCiudades) => getAllCiudadByPaisSuccess({ciudad: r.data }))
        .catch(error => getAllCiudadByPaisFailure({error}))
    )));


  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}

}
