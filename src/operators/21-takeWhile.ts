// ! 49 - takeWhile

import { fromEvent, Observer } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        // takeWhile(({ y }) => y <= 150)
        // * the true argument is the inclusive flag, that says when the first value that satisfies the condition of the first argument will be included in the response
        takeWhile(({ y }) => y <= 150, true)
    )
    .subscribe(observer);
