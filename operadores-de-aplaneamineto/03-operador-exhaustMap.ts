/**
 * operador exhaustMap
 * exhaustMap = solo mantiene una suscripcion activa antes y cuando esta se termina toma la nueva suscripcion
 */

import { fromEvent, interval, exhaustMap, take } from 'rxjs';

const interval$ = interval(500).pipe(take(10));
const click$ = fromEvent(document, 'click')
  .pipe(exhaustMap(() => interval$))
  .subscribe(console.log);
