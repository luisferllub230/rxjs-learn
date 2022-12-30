/**
 * operador skip
 * skip = se salta las emisiones
 */

import { from, skip } from 'rxjs';

const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const skipObs = numArrayObs.pipe(skip(1)).subscribe(console.log);
