// ! 60 - sampleTime

import { fromEvent, Observer } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
    .pipe(
        sampleTime(2000),
        map(({ x, y }) => ({ x, y }))
    )
    .subscribe(observer);
