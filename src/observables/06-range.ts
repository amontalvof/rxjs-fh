// ! 25 - range
import { range, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const src1$ = range(-5, 10);

console.log('start');
src1$.subscribe(observer);
console.log('end');
