// ! 69 - getJSON

import { Observer } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const url = 'https://httpbin.org/delay/1';
const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'my-token': '123qwe',
});

obs$.subscribe(observer);
