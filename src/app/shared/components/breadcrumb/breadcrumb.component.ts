import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IBreadCrumb} from '../../../data/interfaces/iBreadcrumbs';
import {User} from '../../../data/models/user';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {LOCAL_STORAGE} from '../../../core/const/localStorage.const';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$: Observable<IBreadCrumb[]>;
  user: User;

  constructor(
    private readonly breadcrumbService: BreadcrumbService,
    ) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.login));
  }

}
