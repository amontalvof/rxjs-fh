// ! 58 - debounceTime

import { asyncScheduler, fromEvent, Observer } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(throttleTime(3000)); //.subscribe(observer);

// * Example 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$
    .pipe(
        throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
        pluck('target', 'value'),
        distinctUntilChanged()
    )
    .subscribe(observer);
