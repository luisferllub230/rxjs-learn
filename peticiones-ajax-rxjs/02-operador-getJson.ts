/**
 * operador getJson
 */

import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax
  .getJSON(url, {
    'Content-Type': 'application/header',
    'mi-token': 'ABC123',
  })
  .subscribe(console.log);
