// operador de aplanamiento = nos suscribe internamente a un operador y nos regresa en la misma cadena la respuesta

import {
  fromEvent,
  pluck,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

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
