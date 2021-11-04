// ! 94 - forkJoin function deprecated
import { of, interval, forkJoin, Observer } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const numbers$ = of(1, 2, 3);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of('a', 'b', 'c').pipe(delay(3500));

forkJoin(numbers$, interval$, letters$).subscribe(observer);
forkJoin({ numbers$, interval$, letters$ }).subscribe(observer);
forkJoin({ num: numbers$, int: interval$, let: letters$ }).subscribe(observer);
