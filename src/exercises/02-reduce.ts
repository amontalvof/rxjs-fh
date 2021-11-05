// ! 100 - reduce exercise
/**
 * Exercise:
 * Add all the numbers in the array using a reduce.
 * You must filter so that only numbers are processed
 * The output must be 32
 *
 * Tip:
 * isNan () is a JavaScript function to determine if it is number
 * Use filter <any> (...) to avoid typing problems.
 */

import { from, Observer } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

(() => {
    const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

    from(datos)
        .pipe(
            filter<any>((value) => !isNaN(value)),
            reduce((accumulator: number, currentValue: number): number => {
                return accumulator + currentValue;
            }, 0)
        )
        .subscribe(observer); // The output should be 32
})();
