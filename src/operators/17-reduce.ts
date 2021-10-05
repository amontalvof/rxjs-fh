// ! 42 - reduce

import { interval, Observer } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const total = (accumulator: number, currentValue: number): number => {
    return accumulator + currentValue;
};

interval(500)
    .pipe(take(6), tap(console.log), reduce(total, 0))
    .subscribe(observer);
