/**
 * operator takeWhile
 * takeWhile = emite el valores hasta que encuentre uno que no cumpla con la condicion
 */

import { from, of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const Observer = {
  next: (a) => console.log(a),
  error: (e) => console.log(e),
  completed: () => console.log('completed'),
};

const container = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const from$ = from(container);
from$.pipe(takeWhile((t) => t <= 10, true)).subscribe(console.log);
