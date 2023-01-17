/**
 * operador combineLaste
 * combineLaste retorna un valor cuando todos los observables emitan un valor
 */

 import { combineLatest, fromEvent, pluck } from 'rxjs';

 const click$ = fromEvent(document, 'click');
 const keyUp$ = fromEvent(document, 'keyup');
 
 combineLatest(click$.pipe(pluck('type')), keyUp$.pipe(pluck('type'))).subscribe(
   console.log
 );
 