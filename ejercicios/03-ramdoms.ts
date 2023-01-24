import { filter, from, last, map, interval, take, Subject } from 'rxjs';

// == NO TOCAR este bloque ====================
const reloj$ = interval(1000).pipe(
  take(5),
  map((val) => Math.round(Math.random() * 100))
);
// No tocar la creación del observable
// ============================================

// Estos dos observables deben de emitir exactamente los mismos valores

let newSubject$ = new Subject();
reloj$.subscribe(newSubject$);

newSubject$.subscribe((val) => console.log('obs1', val));
newSubject$.subscribe((val) => console.log('obs2', val));
