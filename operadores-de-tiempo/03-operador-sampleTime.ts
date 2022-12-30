/**
 * operador sampleTime
 * sampleTime = nos permite tener el ultimo valor emitido en un intervalo de tiempo =
 */

import { fromEvent, map, sampleTime } from 'rxjs';

fromEvent<MouseEvent>(document, 'click')
  .pipe(
    sampleTime(3000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
