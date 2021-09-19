// ! 29 - more examples with from and of
import { of, from, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of([1, 2, 3, 4, 5]);

// const source$ = from('Andy');

const source$ = from(fetch('https://api.github.com/users/amontalvof'));

// source$.subscribe(async (resp) => {
//     const data = await resp.json();
//     console.log(data);
// });

// source$.subscribe(observer);

const myGenerator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

const myIterator = myGenerator();

// for (const iterator of myIterator) {
//     console.log(iterator);
// }

from(myIterator).subscribe(observer);
