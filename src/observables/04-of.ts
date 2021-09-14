// ! 23 - of
import { of, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

// const obs$ = of(...[1, 2, 3, 4, 5, 6]);
const obs$ = of(
    [1, 2],
    { a: 1, b: 2 },
    function () {},
    true,
    Promise.resolve(true)
);

console.log('obs$ start');
obs$.subscribe(observer);
console.log('obs$ end');
