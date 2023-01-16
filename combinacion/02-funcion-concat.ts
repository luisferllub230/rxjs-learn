/**
 * funcion concat
 * concat nos permiter uner varios observalbes y hasta que el primero se completo los demas observables no se emitiran
 */

import { interval, concat, take } from 'rxjs';

const interval1$ = interval(1000);
const interval2$ = interval(1000);
const interval3$ = interval(1000);

concat(
  interval1$.pipe(take(3)),
  interval2$.pipe(take(2)),
  interval3$.pipe(take(1))
).subscribe(console.log);
