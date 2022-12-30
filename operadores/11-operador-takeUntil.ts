/**
 * operator takeUntil
 * takeUntil = resive dos observables y se deja de emitir valores cuando el segundo observable emite un valor
 */

import { fromEvent, interval, takeUntil } from 'rxjs';

const buttom = document.createElement('button');
buttom.innerHTML = 'soy un boton';
document.querySelector('body').append(buttom);

const interval$ = interval(1000);
const btnClick$ = fromEvent(buttom, 'click');

interval$.pipe(takeUntil(btnClick$)).subscribe({
  next: (a) => console.log('a: ', a),
  complete: () => console.log('complete'),
});
