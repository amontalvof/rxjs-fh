// ! 61 - sample

import { interval, fromEvent, Observer } from 'rxjs';
import { sample } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const interval$ = interval(500);

const click$ = fromEvent<PointerEvent>(document, 'click');

interval$.pipe(sample(click$)).subscribe(observer);
