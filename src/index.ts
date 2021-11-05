// ! 99 - capitalize exercise
/**
 * Exercise:
 * The objective of is to make the same impression, but using observables
 * Note: DO NOT use the "FOR OF" loop, use an observable and call the capitalize function
 */

/**
 * Expected output:
 * Batman
 * Joker
 * Double Side
 * Penguin
 * Poison Ivy
 */

import { from, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

(() => {
    const names = [
        'batman',
        'joker',
        'doble cara',
        'pingüino',
        'hiedra venenosa',
    ];

    const capitalize = (name: string) =>
        name.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );

    from(names).pipe(map(capitalize)).subscribe(observer);
})();
