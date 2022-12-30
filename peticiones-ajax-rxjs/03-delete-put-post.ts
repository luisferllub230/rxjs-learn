/**
 *  delete, put y post en rxjs
 */

import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// (get) (delete) primer valor url, segundo valor headers
ajax
  .get(url, {
    tokend: 'klkdesdeeltokend',
  })
  .subscribe(console.log);

// (post) (put) primer valor url, segundo valor body, tercer valor header
ajax
  .post(
    url,
    {
      id: 1,
      nombre: 'luis',
    },
    {
      klkpanamio: '23123232323123',
    }
  )
  .subscribe(console.log);
