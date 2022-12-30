/**
 * operador concatMap
 * concatMap = el operador concatMap a va creando lineas de tiempo segun los observable pero las segunda linea de tiempo no se ejecutara hasta que la linea de tiempo(observable) anterior se termine.
 */

import { fromEvent, interval, take, concatMap } from 'rxjs';

const interval$ = interval(500).pipe(take(3));
const click = fromEvent(document, 'click')
  .pipe(concatMap(() => interval$))
  .subscribe(console.log);
