/**
 * operador scan
 * scan = lo mismo que el reduce pero te muestra el valor desde el principio a fin
 */

import { interval, take } from 'rxjs';
import { tap, scan } from 'rxjs/operators';

interval(1000)
  .pipe(
    take(10),
    tap((a) => console.log('tap ' + a)),
    scan((ac, va) => ac + va)
  )
  .subscribe(console.log);
