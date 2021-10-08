// ! 48 - first

import { fromEvent, Observer } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
    .pipe(
        tap<PointerEvent>(console.log),
        map(({ clientX, clientY }) => ({ clientX, clientY })),
        first((event) => event['clientY'] >= 150)
    )
    .subscribe(observer);
