/**
 * operador sample
 * sample = hay dos operadores uno si el primero emite un valor este no se emitira o preentara hasta que el operador(2) emita un valor
 */

import { fromEvent, interval, sample } from 'rxjs';

const interval$ = interval(100);
const click$ = fromEvent(document, 'click');

interval$.pipe(sample(click$)).subscribe(console.log);
