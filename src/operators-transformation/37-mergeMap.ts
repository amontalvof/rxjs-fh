// ! 78 - mergeMap

import { of, interval, fromEvent, Observer } from 'rxjs';
import { map, take, mergeMap, takeUntil } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

// const letters$ = of('a', 'b', 'c');

// letters$
//     .pipe(
//         mergeMap((letter) =>
//             interval(1000).pipe(
//                 map((i) => letter + i),
//                 take(3)
//             )
//         )
//     )
//     .subscribe(observer);

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$
    .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$))))
    .subscribe(observer);
