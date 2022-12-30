/**
 * operador distinct
 * distinct = solo nos permite pasar los valores que no han sidos emitidos por nuestro observable o sea no permite que se repita un valor
 */

import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const personajes = [
  {
    type: 'heroe',
    nombre: 'sdas',
  },
  {
    type: 'villano',
    nombre: 'sdas2',
  },
  {
    type: 'heroe',
    nombre: 'sdas3',
  },
  {
    type: 'villano',
    nombre: 'sdas4',
  },
];

from(personajes)
  .pipe(distinct((t) => t.type))
  .subscribe(console.log);
