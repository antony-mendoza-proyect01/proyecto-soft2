import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {debounceTime, Subject} from 'rxjs';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

export class Alert {
  type: string ;
  message: string;

  constructor(type : 'success'|'info'|'warning'|'danger'|'dark'|'primary'|'secondary'|'light'|'', message: string) {
    this.type = type;
    this.message = message;
  }
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',})
export class AlertComponent implements OnInit {
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;
  alert: Alert = new Alert('', '');

  private _alert = new Subject<Alert>();
  staticAlertClosed = false;

  ngOnInit(): void {
    this._alert.subscribe((alert: Alert) => {
      this.alert = alert;
    });
    this._alert.pipe(debounceTime(2000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  public changeMessage(alert: Alert) {
    this._alert.next(alert);
  }
}
