import './style.css';

/**
 * operador startWith
 * startWith este operador comienza con el valor que se le ponga
 */

import { startWith, of } from 'rxjs';
const ofNumber = of(1, 2, 3);
ofNumber.pipe(startWith(7)).subscribe(console.log);
