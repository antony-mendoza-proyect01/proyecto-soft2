import { Component, OnInit } from '@angular/core';
import {Aplication, INavigation} from '../../../../../../data/interfaces/iNavigation';
import {NAVIGATION_APLICATION} from '../../../../../../core/const/navigation.const';
import {MODULO} from '../../../../../../core/const/navigation.string.const';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  navigation: INavigation =
    NAVIGATION_APLICATION
    .find(e => e.id === MODULO.APROVISIONAMIENTO.id)
      .navegacion.find(e => e.id === MODULO.APROVISIONAMIENTO.PRESUPUESTOS.id);

  constructor() { }

  ngOnInit(): void {
  }

}
