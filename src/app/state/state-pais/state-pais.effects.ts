import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import { ApiService } from 'src/app/data/services/api.service';
import {getAllPais, getAllPaisFailure, getAllPaisSuccess} from './state-pais.actions';
import {ResponsePaises} from '../../data/models/pais';


@Injectable()
export class PaisEffects {
  getAllPais$ = createEffect(() => this.actions$.pipe(
    ofType(getAllPais),
    switchMap(async () =>
      await this.apiService.paisService.getAll()
        .then((r: ResponsePaises) => getAllPaisSuccess({pais: r.data }))
        .catch(error => getAllPaisFailure({error}))
    )));


  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}

}
