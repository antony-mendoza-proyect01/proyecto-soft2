import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap, tap} from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ApiService } from 'src/app/data/services/api.service';
import {
  postConsultaDocumentos, postConsultaDocumentosFailure, postConsultaDocumentosSuccess
} from './presupuesto-consulta-documentos.actions';
import {ResponseDocumentos} from '../../../../../data/models/documentos';

@Injectable()
export class ConsultaDocumentosEffects {

  postConsultaDocumentos$ = createEffect(() => this.actions$.pipe(
    ofType(postConsultaDocumentos),
    switchMap(async ({consulta}) =>
      await this.apiService.tareasPresupuestosService.consultarDocumentos(consulta)
        .then((r: ResponseDocumentos) =>
          postConsultaDocumentosSuccess({documentos: r.data.documentos, documentosFiltro: r.data.documentos }))
        .catch(error =>
          postConsultaDocumentosFailure({error}))
    )));


  toastApiError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        postConsultaDocumentosFailure,
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

  // openModal(item: TareasPresupuesto): Observable<TareasPresupuesto>{
  //   return from(this._openModal(item));
  // }
  //
  // async _openModal(item: TareasPresupuesto): Promise<TareasPresupuesto> {
  //   try {// refModal = referencias que estan en el modal
  //     const refModal = this.ngbModal.open(FormModalComponent, { size: 'xl' } );
  //     refModal.componentInstance.tareasPresupuesto = item;
  //
  //     return refModal.result;
  //   }catch (e) {
  //     throw(e);
  //   }
  // }

}
