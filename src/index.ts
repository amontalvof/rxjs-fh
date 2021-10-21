// ! 75 - transformation operators

import { fromEvent, Observer } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck,map,debounceTime,catchError } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

// * References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput,orderList);

// * Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    map((event) => {
        const text = event.target['value'];
        return ajax.getJSON(`https://api.github.com/users/${text}`)
    })
).subscribe((resp) => {
    resp.pipe(pluck('url')).subscribe(observer)
})