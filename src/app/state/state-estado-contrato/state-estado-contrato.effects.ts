import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import { ApiService } from 'src/app/data/services/api.service';
import {
  getAllEstadoContrato,
  getAllEstadoContratoFailure,
  getAllEstadoContratoSuccess
} from './state-estado-contrato.actions';
import {ResponseEstadoContratos} from '../../data/models/estado-contrato';


@Injectable()
export class EstadoContratoEffects {
  getAllEstadoContrato$ = createEffect(() => this.actions$.pipe(
    ofType(getAllEstadoContrato) ,
    switchMap(async () =>
      await this.apiService.estadoContratoService.getAll()
        .then((r: ResponseEstadoContratos) => getAllEstadoContratoSuccess({estadoContrato: r.data }))
        .catch(error => getAllEstadoContratoFailure({error}))
    )));


  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}

}
