/**
 * operador reduce
 * reduce = es un operador matemático que aplica una función acumuladora sobre la entrada o fuente Observable, que devuelve un valor acumulado en una forma observable cuando se completa la fuente.
 */

import { interval, reduce, take, tap } from 'rxjs';

interval(1000)
  .pipe(
    take(8),
    tap((a) => console.log('tap', a)),
    reduce((ac, va) => ac + va, 1)
  )
  .subscribe(console.log);
