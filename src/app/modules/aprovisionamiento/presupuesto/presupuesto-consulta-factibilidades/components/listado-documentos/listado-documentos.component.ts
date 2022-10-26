import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../app.state';
import {
  selectDocumentosConsultaFactibilidades,
 selectLoadingDocumentosFormatosConsultaFactibilidades
} from '../../state/presupuesto-consulta-factibilidades.selectors';
import {Documentos} from '../../../../../../data/models/documentos';

@Component({
  selector: 'app-listado-documentos',
  templateUrl: './listado-documentos.component.html',
  styleUrls: ['./listado-documentos.component.scss']
})
export class ListadoDocumentosComponent implements OnInit {
  documentos$: Observable<Documentos[]> = new Observable();
  loading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<AppState>,
    ) { }

  ngOnInit(): void {
    this.documentos$ = this.store.select(selectDocumentosConsultaFactibilidades);
    this.loading$ = this.store.select(selectLoadingDocumentosFormatosConsultaFactibilidades);
  }

}
