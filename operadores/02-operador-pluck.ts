/**
 * operador pulck
 * pluck = nos permite optener el parametro especifico de un objeto
 */

import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const keyPluck$ = click$.pipe(pluck('target', 'view')).subscribe(console.log);
