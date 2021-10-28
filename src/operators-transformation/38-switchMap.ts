// ! 80- switchMap

import { fromEvent, Observer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, switchMap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

// * References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// * Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

const url = 'https://httpbin.org/delay/1?arg=';
input$
    .pipe(
        pluck('target', 'value'),
        switchMap((text) => ajax.getJSON(url + text))
    )
    .subscribe(observer);
