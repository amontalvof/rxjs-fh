// ! 58 - debounceTime

import { fromEvent, Observer } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(debounceTime(3000)).subscribe(observer);

// * Example 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$
    .pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged())
    .subscribe(observer);
