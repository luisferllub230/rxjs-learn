/**
 * operador ajax
 */

import { ajax } from 'rxjs/ajax';
import { catchError, first, from, pluck, take } from 'rxjs';

const url = 'https://api.github.com/userXXxxs?per_page=05';

ajax(url)
  .pipe(
    pluck('response'),
    catchError((err) => from([]))
  )
  .subscribe(console.log);
