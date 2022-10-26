import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, switchMap, tap} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ApiService } from 'src/app/data/services/api.service';
import {ResponseTareasPresupuestos, TareasPresupuesto} from '../../../../../data/models/tareas-presupuesto';
import {
  formatoPresupuestoModalPresupuestoConsultaFactibilidadesFailure,
  generarDocumentosPresupuestoConsultaFactibilidades, generarDocumentosPresupuestoConsultaFactibilidadesFailure,
  generarDocumentosPresupuestoConsultaFactibilidadesSuccess,
  getFormatosByCiudadPresupuestoConsultaFactibilidades,
  getFormatosByCiudadPresupuestoConsultaFactibilidadesFailure,
  getFormatosByCiudadPresupuestoConsultaFactibilidadesSuccess,
  postTareasPresupuestoConsultaFactibilidades,
  postTareasPresupuestoConsultaFactibilidadesFailure,
  postTareasPresupuestoConsultaFactibilidadesSuccess,
  verTareaPresupuestoConsultaFactibilidades,
  verTareaPresupuestoConsultaFactibilidadesFailure,
  verTareaPresupuestoConsultaFactibilidadesSuccess
} from './presupuesto-consulta-factibilidades.actions';
import {from, map, Observable, of} from 'rxjs';
import {FormModalComponent} from '../components/form-modal/form-modal.component';
import {Formato, ResponseFormatos} from '../../../../../data/models/formatos';
import {FormModalFormatosComponent} from '../components/form-modal-formatos/form-modal-formatos.component';
import {GenerarDocumentos} from '../../../../../data/structures/generarDocumentos';
import {ResponseDocumentos} from '../../../../../data/models/documentos';

@Injectable()
export class ConsultaFactibilidadesEffects {
  postTareasPresupuestoConsultaFactibilidades$ = createEffect(() => this.actions$.pipe(
    ofType(postTareasPresupuestoConsultaFactibilidades),
    switchMap(async ({consulta}) =>
      await this.apiService.tareasPresupuestosService.consultar(consulta)
        .then((r: ResponseTareasPresupuestos) =>
          postTareasPresupuestoConsultaFactibilidadesSuccess({tareasPresupuesto: r.data.tareasPresupuesto, tareasPresupuestoFiltro: r.data.tareasPresupuesto, }))
        .catch(error =>
          postTareasPresupuestoConsultaFactibilidadesFailure({error}))
    )));

  // run modales
  verTareaPresupuestoConsultaFactibilidades$ = createEffect(() => this.actions$.pipe(
    ofType(verTareaPresupuestoConsultaFactibilidades),
    concatMap(({edit}) => this.openModal(edit).pipe(
        map((durezas: TareasPresupuesto) =>
          verTareaPresupuestoConsultaFactibilidadesSuccess({edit: durezas})),
        catchError(error =>
          of(verTareaPresupuestoConsultaFactibilidadesFailure({error})))
      )
    )));

  getFormatosByCiudadPresupuestoConsultaFactibilidades$ = createEffect(() => this.actions$.pipe(
    ofType(getFormatosByCiudadPresupuestoConsultaFactibilidades),
    switchMap(async ({idCiudad}) =>
      await this.apiService.formatoService.getByCiudad(idCiudad)
        .then((r: ResponseFormatos) =>
          getFormatosByCiudadPresupuestoConsultaFactibilidadesSuccess({formatos: r.data }))
        .catch(error =>
          getFormatosByCiudadPresupuestoConsultaFactibilidadesFailure({error}))
    )));

  getFormatosByCiudadPresupuestoConsultaFactibilidadesSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(getFormatosByCiudadPresupuestoConsultaFactibilidadesSuccess),
    concatMap(({formatos}) => this.openModalFormatos(formatos).pipe(
        map((body: GenerarDocumentos) =>
          generarDocumentosPresupuestoConsultaFactibilidades({body})),
        catchError(error =>
          of(formatoPresupuestoModalPresupuestoConsultaFactibilidadesFailure({error}))))
    )));

  generarDocumentosPresupuestoConsultaFactibilidades$ = createEffect(() => this.actions$.pipe(
    ofType(generarDocumentosPresupuestoConsultaFactibilidades),
    switchMap(async ({body}) =>
      await this.apiService.tareasPresupuestosService.generarDocumentos(body)
        .then((r: ResponseDocumentos) =>
          generarDocumentosPresupuestoConsultaFactibilidadesSuccess(
            {documentos: r.data.documentos }))
        .catch(error =>
          generarDocumentosPresupuestoConsultaFactibilidadesFailure({error}))
    )));


  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postTareasPresupuestoConsultaFactibilidadesFailure,
      ),
      tap(action => {
        this.toastService.danger(null, action.error);
      })),{ dispatch: false });


  constructor(
    private store: Store,
    private toastService: ToastService,
    private actions$: Actions,
    private apiService: ApiService,
    private ngbModal: NgbModal,
  ) {}

  openModal(item: TareasPresupuesto): Observable<TareasPresupuesto>{
    return from(this._openModal(item));
  }

  async _openModal(item: TareasPresupuesto): Promise<TareasPresupuesto> {
    try {// refModal = referencias que estan en el modal
      const refModal = this.ngbModal.open(FormModalComponent, { size: 'xl' } );
      refModal.componentInstance.tareasPresupuesto = item;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }

  openModalFormatos(formatos: Formato[]): Observable<GenerarDocumentos>{
    return from(this._openModalFormatos(formatos));
  }

  async _openModalFormatos(formatos: Formato[]): Promise<GenerarDocumentos> {
    try {// refModal = referencias que estan en el modal
      let _formatos = [];
      formatos.forEach( element => {
        let copia = {...element, check: false};
        _formatos.push(copia);
      });
      const refModal = this.ngbModal.open(FormModalFormatosComponent, { size: 'xl' } );
      refModal.componentInstance.formatos = _formatos;

      return refModal.result;
    }catch (e) {
      throw(e);
    }
  }
}
