import { ajax } from 'rxjs/ajax';
import './style.css';
/**
 * range
 * nos permite crear observalbes de valores numericos
 */
// import { range } from 'rxjs';
// range(0, 5).subscribe(console.log);

/**
 * interval
 */
// import { interval } from 'rxjs';
// let interval$ = interval(1000);
// interval$.subscribe(console.log);

/**
 * asycnSheduler
 * puedes ejecutar el setTimeout y el setIntervalo
 */
// import {asyncScheduler} from 'rxjs';
// //setTimeout
// const hi = ({name, hi})=>console.log(hi, name);
// asyncScheduler.schedule(hi, 1000, {name:'luis', hi:'hi'});

/**
 * from and of
 * of = toma argumentos y genera una secuencia de valores
 * from = crea un observable en base a un arreglo
 */
// import {from, of} from 'rxjs';
// const array = 'klk pana mio';
// from(array).subscribe((f)=>console.log('from', f))
// of(array).subscribe((f)=>console.log('of',f))

//-------------------------operadores-----------------------------

// que son los operadores?
//Los operadores son funciones que construyen sobre la fundación de los observables para tener una manipulación más sofisticada de las colecciones.

/**
 * operador map
 * map = nos permite trasformar la data
 */
// import { range, fromEvent, Observable } from 'rxjs';
// import { map, pluck } from 'rxjs/operators';
// range(1, 5)
//   .pipe(map<number, number>((num) => num * 10))
//   .subscribe(console.log);
// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// keyup$.pipe(
//   map((key) => key.code),
// ).subscribe(console.log);

/**
 * operador pulck
 * pluck = nos permite optener el parametro especifico de un objeto
 */
// import { fromEvent } from 'rxjs';
// import { pluck } from 'rxjs/operators';

// const click$ = fromEvent(document, 'click');
// const keyPluck$ = click$.pipe(pluck('target', 'view')).subscribe(console.log);

/**
 * operador filter
 * filter = filtra ._.
 */
// import { from, map, Observable, range } from 'rxjs';
// import { filter } from 'rxjs/operators';
// // const range$: Observable<number>= range(1,10);
// // range$.pipe(
// //   filter(r => r % 2 === 0),
// //   map(r => r ** 2)
// // ).subscribe(console.log)

// interface Personajes {
//   type: string,
//   nombre: string
// }

// const personajes: Personajes[] = [
//   {
//     type: 'heroe',
//     nombre: 'sdas',
//   },
//   {
//     type: 'villano',
//     nombre: 'sdas2',
//   },
//   {
//     type: 'heroe',
//     nombre: 'sdas3',
//   },
//   {
//     type: 'villano',
//     nombre: 'sdas4',
//   },
// ];

// const personajes$: Observable<Personajes> = from(personajes);
// personajes$.pipe(filter((p, i) => p.type === 'villano')).subscribe(console.log);

/**
 * operador skip
 * skip = se salta los valores
 */
// import {from, skip} from 'rxjs';
// const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// const skipObs = numArrayObs.pipe(skip(1)).subscribe(console.log);

/**
 * operador tap
 * tap = nos permite disparar efectos secundarios sin alteral el flujo del observable
 */
// import { map, range } from 'rxjs';
// import { tap } from 'rxjs/operators';
// const range$ = range(1, 5);
// range$
//   .pipe(
//     tap((e) => console.log('antes', e)),
//     map((e) => e * 5)
//   )
//   .subscribe(console.log);

/**
 * operador reduce
 * reduce = es un operador matemático que aplica una función acumuladora sobre la entrada o fuente Observable, que devuelve un valor acumulado en una forma observable cuando se completa la fuente.
 */

// import { interval, reduce, take, tap } from 'rxjs';
// interval(1000)
//   .pipe(
//     take(8),
//     tap((a) => console.log('tap', a)),
//     reduce((ac, va) => ac + va, 1)
//   )
//   .subscribe(console.log);

/**
 * operador scan
 * scan = lo mismo que el reduce pero te muestra el valor desde el principio a fin
 */
// import {interval, take} from 'rxjs';
// import {tap, scan} from 'rxjs/operators';
// interval(1000).pipe(
//   take(10),
//   tap( (a) => console.log('tap ' + a)),
//   scan( (ac , va) => ac + va )
// ).subscribe(console.log)

/**
 * operador first
 * first = toma el primer valor e interrumpe el ciclo
 */
// import { fromEvent, tap } from 'rxjs';
// import { first, pluck } from 'rxjs/operators';
// fromEvent(document, 'click')
//   .pipe(first(), pluck('path'))
//   .subscribe(console.log);

/**
 * operador last
 * last = toma el ultimo valor
 */
// import { from, tap } from 'rxjs';
// import { first, last, pluck } from 'rxjs/operators';
// from([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 22])
//   .pipe(last((e) => e % 2 == 1))
//   .subscribe(console.log);

/**
 * operator takeWhile
 * takeWhile = emite el valores hasta que encuentre uno que no cumpla con la condicion
 */
// import { from, of } from 'rxjs';
// import { takeWhile } from 'rxjs/operators';
// const Observer = {
//   next: (a) => console.log(a),
//   error: (e) => console.log(e),
//   completed: () => console.log('completed'),
// };
// const container = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const from$ = from(container);
// from$.pipe(takeWhile((t) => t <= 10, true)).subscribe(console.log);

/**
 * operator takeUntil
 * takeUntil = resive dos observables y se deja de emitir valores cuando el segundo observable emite un valor
 */
// import { fromEvent, interval, takeUntil } from 'rxjs';
// const buttom = document.createElement('button');
// buttom.innerHTML = 'soy un boton';
// document.querySelector('body').append(buttom);
// const interval$ = interval(1000);
// const btnClick$ = fromEvent(buttom, 'click');
// interval$.pipe(takeUntil(btnClick$)).subscribe({
//   next: (a) => console.log('a: ', a),
//   complete: () => console.log('complete'),
// });

/**
 * operador distinct
 * distinct = solo nos permite pasar los valores que no han sidos emitidos por nuestro observable o sea no permite que se repita un valor
 */
// import { from } from 'rxjs';
// import { distinct } from 'rxjs/operators';

// const personajes = [
//   {
//     type: 'heroe',
//     nombre: 'sdas',
//   },
//   {
//     type: 'villano',
//     nombre: 'sdas2',
//   },
//   {
//     type: 'heroe',
//     nombre: 'sdas3',
//   },
//   {
//     type: 'villano',
//     nombre: 'sdas4',
//   },
// ];

// from(personajes)
//   .pipe(distinct((t) => t.type))
//   .subscribe(console.log);

/**
 * operador distinctUntilChanged
 * distinctUntilChanged = emite valores siempre y cuando la emision anterior no sea la misma
 */
// import { from } from 'rxjs';
// import { distinctUntilChanged } from 'rxjs/operators';

// const personajes = [
//   {
//     type: 'heroe',
//     nombre: 'sdas',
//   },
//   {
//     type: 'villano',
//     nombre: 'sdas',
//   },
//   {
//     type: 'heroe',
//     nombre: 'sdas3',
//   },
//   {
//     type: 'villano',
//     nombre: 'sdas4',
//   },
// ];

// from(personajes)
//   .pipe(distinctUntilChanged((pv, v) => pv.nombre === v.nombre))
//   .subscribe(console.log);

//-------------------------operadores de tiempo-----------------------------

/**
 * operador debounceTime
 * debounceTime = emite el ultimo valor cuando pasa el tiempo establecido
 */
// import { fromEvent, debounceTime, pluck, distinctUntilChanged } from 'rxjs';
// const input = document.createElement('input');
// document.querySelector('body').append(input);

// fromEvent(input, 'keyup')
//   .pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged())
//   .subscribe(console.log);

/**
 * operador throttleTime
 * throttleTime = emite un valor luego de que pase el tiempo establecido
 */

/**
 * operador sampleTime
 * sampleTime = nos permite tener el ultimo valor emitido en un intervalo de tiempo =
 */
// import { fromEvent, map, sampleTime } from 'rxjs';

// fromEvent<MouseEvent>(document, 'click')
//   .pipe(
//     sampleTime(3000),
//     map(({ x, y }) => ({ x, y }))
//   )
//   .subscribe(console.log);

/**
 * operador sample
 * sample = hay dos operadores uno si el primero emite un valor este no se emitira o preentara hasta que el operador(2) emita un valor
 */
// import { fromEvent, interval, sample } from 'rxjs';
// const interval$ = interval(100);
// const click$ = fromEvent(document, 'click');
// interval$.pipe(sample(click$)).subscribe(console.log);

/**
 * operador auditTime
 * auditTime = emite el ultimo valor que a sido emitido en en periodo de tiempo
 */
// import { fromEvent, auditTime, map, tap } from 'rxjs';
// fromEvent<MouseEvent>(document, 'click')
//   .pipe(
//     map(({ x }) => x),
//     tap(console.log),
//     auditTime(5000)
//   )
//   .subscribe((a) => console.log('last value: ', a));

//-------------------------peticiones con rxjs-----------------------------

/**
 * operador ajax
 */
// import { ajax } from 'rxjs/ajax';
// import { catchError, first, from, pluck, take } from 'rxjs';
// const url = 'https://api.github.com/userXXxxs?per_page=05';
// ajax(url)
//   .pipe(
//     pluck('response'),
//     catchError((err) => from([]))
//   )
//   .subscribe(console.log);

/**
 * operador getJson
 */
// import { ajax } from 'rxjs/ajax';
// const url = 'https://httpbin.org/delay/1';
// ajax
//   .getJSON(url, {
//     'Content-Type': 'application/header',
//     'mi-token': 'ABC123',
//   })
//   .subscribe(console.log);

/**
 *  delete, put y post en rxjs
 */
// const url = 'https://httpbin.org/delay/1';

// (get) (delete) primer valor url, segundo valor headers
// ajax
//   .get(url, {
//     tokend: 'klkdesdeeltokend',
//   })
//   .subscribe(console.log);

// (post) (put) primer valor url, segundo valor body, tercer valor header
// ajax
//   .post(
//     url,
//     {
//       id: 1,
//       nombre: 'luis',
//     },
//     {
//       klkpanamio: '23123232323123',
//     }
//   )
//   .subscribe(console.log);

//-------------------------operadores de transformacion-----------------------------

// operador de aplanamiento = nos suscribe internamente a un operador y nos regresa en la misma cadena la respuesta

/**
 *
 */

import {
  fromEvent,
  pluck,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs';

const body = document.querySelector('body');
const input = document.createElement('input');
const ol = document.createElement('ol');

body.append(input);

const keyInput$ = fromEvent<InputEvent>(input, 'input');

keyInput$
  .pipe(
    debounceTime(500),
    pluck('target', 'value'),
    distinctUntilChanged(),
    map((value) => {
      return ajax.getJSON(`https://api.github.com/users/${value}`);
    })
  )
  .subscribe((resp) => {
    resp.subscribe(console.log);
  });
