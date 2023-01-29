/**
 * metodo merge
 * merge nos permiter unir varios observalbes
 */

 import { interval, merge, take } from 'rxjs';

 const interval1$ = interval(1000);
 const interval2$ = interval(1000);
 const interval3$ = interval(1000);
 
 merge(
   interval1$.pipe(take(3)),
   interval2$.pipe(take(2)),
   interval3$.pipe(take(1)));