/**
 * from and of
 * of = toma argumentos y genera una secuencia de valores
 * from = crea un observable en base a un arreglo
 */

import { from, of } from 'rxjs';

const array = 'klk pana mio';

from(array).subscribe((f) => console.log('from', f));
of(array).subscribe((f) => console.log('of', f));
