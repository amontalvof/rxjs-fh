// ! 62 - auditTime

import { fromEvent, Observer } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
    .pipe(
        map(({ x }) => x),
        tap((val) => console.log('tap', val)),
        auditTime(5000)
    )
    .subscribe(observer);
