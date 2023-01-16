//que son los observables?
//Los observables son los encargados de propagar la información y notificar sus cambios, para ello proporciona métodos a partir de los cuales los observers pueden suscribirse o cancelar la suscripción de sus flujos de datos.

//que son los observer?
//Los observers son objetos que están escuchando el flujo de datos y actúan sobre los valores que éste emit

// que son los operadores?
//Los operadores son funciones que construyen sobre la fundación de los observables para tener una manipulación más sofisticada de las colecciones.

/**
 * operador map
 * map = nos permite trasformar la data
 */

import { range, fromEvent, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

range(1, 5)
  .pipe(map<number, number>((num) => num * 10))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(map((key) => key.code)).subscribe(console.log);
