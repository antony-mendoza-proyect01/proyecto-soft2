// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const PROTOCOL = window.location.protocol;
export const SERVER_GEO = '51.75.170.167';
export const PORT_GEO = '8080';

export const SERVER = 'localhost';
export const PORT = '8080';

export const environment = {
  production: false,
  urlApiGeo: PROTOCOL + '//' + SERVER_GEO +  ':' + PORT_GEO + '/geoscript/api/v1/',
  urlApi: PROTOCOL + '//' + SERVER +  ':' + PORT + '/api/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
