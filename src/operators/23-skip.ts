// ! 51 - skip

import { fromEvent, interval, Observer } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';
document.querySelector('body').append(button);

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const counter$ = interval(1000);
// * the skip operator allows me to skip events a certain number of times before I start listening
const clickBtn$ = fromEvent<PointerEvent>(button, 'click').pipe(
    tap(() => console.log('tap before skip')),
    skip(1),
    tap(() => console.log('tap after skip'))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe(observer);
