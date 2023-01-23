import './style.css';
import { filter, from, last, map } from 'rxjs';

const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];
let container = 0;

from(datos)
  .pipe(
    filter<any>((num) => (isNaN(num) ? 0 : num)),
    map((num) => (container += num)),
    last()
  )
  .subscribe(console.log); // La salida debe de ser 32
