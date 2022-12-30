/**
 * operador last
 * last = toma el ultimo valor
 */

import { from, tap } from 'rxjs';
import { first, last, pluck } from 'rxjs/operators';

from([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 22])
  .pipe(last((e) => e % 2 == 1))
  .subscribe(console.log);
