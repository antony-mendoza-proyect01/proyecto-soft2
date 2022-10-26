import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaginatorService} from '../../services/paginator.service';

@Component({
  selector: 'app-paginado',
  templateUrl: './paginado.component.html',
  styleUrls: ['./paginado.component.scss']
})
export class PaginadoComponent implements OnInit {
  @Output() itemsPaginado = new EventEmitter<number>();
  @Input() items = [];
  @Input() itemsAux = [];
  @Input() paginator: number;

  constructor(public paginatorService: PaginatorService) {
  }

  ngOnInit(): void {
  }

  _refreshPaginator() {
    this.itemsPaginado.emit(this.paginatorService.page);
  }
}
