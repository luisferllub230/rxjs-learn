/**
 * operador first
 * first = toma el primer valor e interrumpe el ciclo
 */

import { fromEvent, tap } from 'rxjs';
import { first, pluck } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(first(), pluck('path'))
  .subscribe(console.log);
