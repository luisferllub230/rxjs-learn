/**
 * asycnSheduler
 * puedes ejecutar el setTimeout y el setIntervalo
 */

import { asyncScheduler } from 'rxjs';

//setTimeout
const hi = ({ name, hi }) => console.log(hi, name);
asyncScheduler.schedule(hi, 1000, { name: 'luis', hi: 'hi' });
