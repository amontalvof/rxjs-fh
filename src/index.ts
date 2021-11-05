// ! 101 - randoms exercise
/**
 * Exercise: Make the final two observables,
 * emit exactly the same value
 *
 * Tip: Hot Observable? subjects?
 */

import { interval, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';

(() => {
    // == DO NOT TOUCH this block ====================
    const watch$ = interval(1000).pipe(
        take(5),
        map((val) => Math.round(Math.random() * 100))
    );
    // Do not touch the creation of the observable
    // ============================================

    const subject$ = new Subject();
    watch$.subscribe(subject$);

    // These two observables must emit exactly the same values
    subject$.subscribe((val) => console.log('obs1', val));
    subject$.subscribe((val) => console.log('obs2', val));
    subject$.subscribe((val) => console.log('obs3', val));
})();
