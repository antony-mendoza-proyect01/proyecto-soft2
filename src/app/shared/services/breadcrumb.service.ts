import {Injectable} from '@angular/core';
import {BehaviorSubject, filter} from 'rxjs';
import {IBreadCrumb} from '../../data/interfaces/iBreadcrumbs';
import {ActivatedRouteSnapshot, NavigationEnd, Router, Data} from '@angular/router';

// implementacion de miga de pan
// https://marco.dev/angular-breadcrumb
@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService  {
  // Subject emitting the breadcrumb hierarchy
  private readonly _breadcrumbs$ = new BehaviorSubject<IBreadCrumb[]>([]);

  // Observable exposing the breadcrumb hierarchy
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(
      // Filter the NavigationEnd events as the breadcrumb is updated only when the route reaches its end
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(event => {
      // Construct the breadcrumb hierarchy
      const root = this.router.routerState.snapshot.root;
      let breadcrumbs: IBreadCrumb[] | any[]  = [];
      this.addBreadcrumb(root, [], breadcrumbs);


      // Emit the new hierarchy
      this._breadcrumbs$.next(breadcrumbs);
    });
  }

  addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: IBreadCrumb[]) {
    if (route) {
      // Construct the route URL
      const routeUrl = parentUrl.concat(route.url.map(url => url.path));

      // Add an element for the current route part
      if (route.data.title) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/')
        };

        if(breadcrumbs.find(e => e.label === breadcrumb.label) === undefined) {
          breadcrumbs.push(breadcrumb);
        }
      }

      // Add another element for the next route part
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }

  getLabel(data: Data) {
    // The breadcrumb can be defined as a static string or as a function to construct the breadcrumb element out of the route data
    return typeof data.title === 'function' ? data.title(data) : data.title;
  }

}
