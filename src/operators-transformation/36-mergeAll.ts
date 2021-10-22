// ! 76 - mergeAll

import { fromEvent, Observer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, map, debounceTime, mergeAll } from 'rxjs/operators';

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

input$
    .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        map((text) =>
            ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
        ),
        mergeAll(),
        pluck('items')
    )
    .subscribe(observer);
