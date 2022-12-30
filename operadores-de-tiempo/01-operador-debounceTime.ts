/**
 * operador debounceTime
 * debounceTime = emite el ultimo valor cuando pasa el tiempo establecido
 */

import { fromEvent, debounceTime, pluck, distinctUntilChanged } from 'rxjs';
const input = document.createElement('input');
document.querySelector('body').append(input);

fromEvent(input, 'keyup')
  .pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged())
  .subscribe(console.log);
