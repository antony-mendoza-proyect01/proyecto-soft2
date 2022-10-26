import {Component, Input, OnInit} from '@angular/core';
import {Aplication} from '../../../../data/interfaces/iNavigation';
import {LOCAL_STORAGE} from '../../../../core/const/localStorage.const';
import {ROUTES_IMAGE} from '../../../../core/const/image.const';
import { User } from 'src/app/data/models/user';
import {environment} from '../../../../../environments/environment';
import {NAVIGATION_APLICATION} from '../../../../core/const/navigation.const';

@Component({
  selector: 'app-container-navigation',
  templateUrl: './container-navigation.component.html',
  styleUrls: ['./container-navigation.component.scss']
})
export class ContainerNavigationComponent implements OnInit {
  user: User;
  aplications: Aplication[];
  logo = ROUTES_IMAGE.logo;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.login));
    if(environment.production) {
      this.aplications = JSON.parse(localStorage.getItem(LOCAL_STORAGE.navegacion));
    }else {
      this.aplications =     NAVIGATION_APLICATION;
    }
  }

}
