const nombres = [
  'batman',
  'joker',
  'doble cara',
  'pingüino',
  'hiedra venenosa',
];

const capitalizar = (nombre: string) =>
  nombre.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

// Cambiar este FOR OF, por un observable y capitalizar las emisiones
// for (let nombre of nombres) {
//   console.log(capitalizar(nombre));
// }

import { from, map } from 'rxjs';

from(nombres).pipe(map(capitalizar)).subscribe(console.log);
