import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {EMPTY} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
// import {LOCAL_STORAGE} from '../const/localStorage.const';
// import {User} from '../../data/models/user';

@Injectable({
  providedIn: 'root'
})
export class RequestsInterceptor implements HttpInterceptor {

  constructor(

  ) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let request = req;


    // if (!req.url.toString().includes('login')) {
    //   try {
    //     const user: User = JSON.parse(localStorage.getItem(LOCAL_STORAGE.login));
    //     request = req.clone({
    //       setHeaders: {
    //         'Authorization': `Bearer ${user.token}`,
    //       }
    //     });
    //
    //   }catch (e) {
    //   }
    // }

    return next.handle(request).pipe(
      map(event => {
        if (event instanceof HttpResponse) {

        }
        return event;
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          /*Mensajes de error*/
        }
        return EMPTY;
      }),
      finalize(() => {

      })
    );
  }

}
