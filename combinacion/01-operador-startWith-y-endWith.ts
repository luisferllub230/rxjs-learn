/**
 * operadores startWith y endWidth
 * startWith este operador comienza con el valor que se le ponga
 * endWith termina con el operador que se le ponga
 */

import { startWith, of, endWith } from 'rxjs';
const ofNumber = of(1, 2, 3);
ofNumber.pipe(startWith(7), endWith(8)).subscribe(console.log);
