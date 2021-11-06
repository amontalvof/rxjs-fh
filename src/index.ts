// ! 103 - countdown exercise
/**
 * Exercise: Combine both observables (letters $, numbers $)
 * so that the emissions are the concatenation of the last
 * securities issued
 */

// Example of the expected rate:
// a1
// a2
// b2
// b3
// c3
// c4
// d4
// d5
// e5

import { interval, timer, combineLatest, Observer } from 'rxjs';
import { take, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

(() => {
    const letters = ['a', 'b', 'c', 'd', 'e'];
    const numbers = [1, 2, 3, 4, 5];

    // Emit letters every second
    const letters$ = interval(1000).pipe(
        map((item) => letters[item]),
        take(letters.length)
    );

    // It emits numbers from 1 to 5 every second, but has an initial delay of 500 thousandths
    const numbers$ = timer(500, 1000).pipe(
        map((item) => numbers[item]),
        take(numbers.length)
    );

    combineLatest(letters$, numbers$)
        .pipe(map(([a, b]) => a + b))
        .subscribe(observer);
})();
