import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../app.state';
import {NgbdSortableHeader, SortEvent} from '../../../../../../shared/directives/sort.directive';

import {
  selectDocumentosConsultaDocumentos,
  selectDocumentosFiltroConsultaDocumentos, selectEditConsultaDocumentos,
  selectLoadingDocumentosFormatosConsultaDocumentos
} from '../../state/presupuesto-consulta-documentos.selectors';
import {Documentos} from '../../../../../../data/models/documentos';
import {paginatorConsultaDocumentos, sortConsultaDocumentos} from '../../state/presupuesto-consulta-documentos.actions';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  documentos$: Observable<Documentos[]> = new Observable();
  documentosAux$: Observable<Documentos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  documentosEdit$: Documentos = new Documentos();


  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private store: Store<AppState>,
    ) { }

  ngOnInit(): void {
    this.documentos$ = this.store.select(selectDocumentosConsultaDocumentos);
    this.documentosAux$ = this.store.select(selectDocumentosFiltroConsultaDocumentos);
    this.loading$ = this.store.select(selectLoadingDocumentosFormatosConsultaDocumentos);

    this.store.select(selectEditConsultaDocumentos).subscribe(x => {this.documentosEdit$ = x;});
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction !== '') {
      this.store.dispatch(sortConsultaDocumentos({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorConsultaDocumentos({paginator}));
  }

}
