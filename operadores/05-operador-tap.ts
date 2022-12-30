/**
 * operador tap
 * tap = nos permite disparar efectos secundarios sin alteral el flujo del observable
 */

import { map, range } from 'rxjs';
import { tap } from 'rxjs/operators';

const range$ = range(1, 5);
range$
  .pipe(
    tap((e) => console.log('antes', e)),
    map((e) => e * 5)
  )
  .subscribe(console.log);
