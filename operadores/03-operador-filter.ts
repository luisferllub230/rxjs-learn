/**
 * operador filter
 * filter = pos filtra ._.
 */

import { from, map, Observable, range } from 'rxjs';
import { filter } from 'rxjs/operators';

const range$: Observable<number> = range(1, 10);
range$
  .pipe(
    filter((r) => r % 2 === 0),
    map((r) => r ** 2)
  )
  .subscribe(console.log);

interface Personajes {
  type: string;
  nombre: string;
}

const personajes: Personajes[] = [
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

const personajes$: Observable<Personajes> = from(personajes);
personajes$.pipe(filter((p, i) => p.type === 'villano')).subscribe(console.log);
