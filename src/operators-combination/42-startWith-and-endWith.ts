// ! 88 and 89 - startWith and endWith

import { of, Observer } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const numbers$ = of(1, 2, 3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);
numbers$.subscribe(observer);
