// ! 83- exhaustMap

import { fromEvent, interval, Observer } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(exhaustMap(() => interval$)).subscribe(observer);
