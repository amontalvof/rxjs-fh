// ! 50 - takeUntil

import { fromEvent, interval, Observer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';
document.querySelector('body').append(button);

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const counter$ = interval(1000);
const clickBtn$ = fromEvent<PointerEvent>(button, 'click');

counter$.pipe(takeUntil(clickBtn$)).subscribe(observer);
