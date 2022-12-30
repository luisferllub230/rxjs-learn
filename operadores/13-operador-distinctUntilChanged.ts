/**
 * operador distinctUntilChanged
 * distinctUntilChanged = emite valores siempre y cuando la emision anterior no sea la misma
 */

import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const personajes = [
  {
    type: 'heroe',
    nombre: 'sdas',
  },
  {
    type: 'villano',
    nombre: 'sdas',
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
  .pipe(distinctUntilChanged((pv, v) => pv.nombre === v.nombre))
  .subscribe(console.log);
