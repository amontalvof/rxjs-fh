// ! 38 - Nested operators
import { fromEvent, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map((event) => event.code),
    filter((key) => key === 'Enter')
);

keyup$.subscribe(observer);
