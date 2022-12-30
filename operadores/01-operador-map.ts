// que son los operadores?
//Los operadores son funciones que construyen sobre la fundación de los observables para tener una manipulación más sofisticada de las colecciones.

/**
 * operador map
 * map = nos permite trasformar la data
 */

import { range, fromEvent, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

range(1, 5)
  .pipe(map<number, number>((num) => num * 10))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(map((key) => key.code)).subscribe(console.log);
