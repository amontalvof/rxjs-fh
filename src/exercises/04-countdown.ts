// ! 102 - countdown exercise
/**
 * Exercise: Countdown
 * starting from 7
 */

// Expected output ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

import { interval, Observer } from 'rxjs';
import { take, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

(() => {
    const start = 7;
    const countdown$ = interval(700).pipe(
        map((item) => start - item),
        take(start + 1)
    );
    // Don't touch this line ==================
    countdown$.subscribe(observer); // =
    // ======================================
})();
