import {Injectable, TemplateRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  warning(header: string, mensaje: string) {
    this.show(mensaje, {header: header, classname: 'toast-warning', });
  }

  info(header: string, mensaje: string) {
    this.show(mensaje, {header: header, classname: 'toast-info'});
  }

  danger(header: string | null, mensaje: string) {
    this.show(mensaje, {header: header, classname: 'toast-danger', icon: 'fa-circle-xmark'});
  }

  success(header: string, mensaje: string) {
    this.show(mensaje, {header: header, classname: 'toast-success'});
  }
}
