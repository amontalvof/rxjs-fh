// ! 37 - filter
import { from, range, Observer } from 'rxjs';
import { filter } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

// const src$ = range(20, 30);

// src$.pipe(
//     filter((value, index) => {
//         console.log('index:', index);
//         return value % 2 === 1;
//     })
// ).subscribe(observer);

interface DC {
    type: string;
    name: string;
}

const dc: DC[] = [
    { name: 'Batman', type: 'hero' },
    { name: 'Robin', type: 'hero' },
    { name: 'Joker', type: 'villain' },
];

from(dc)
    .pipe(
        filter(({ type }) => {
            return type === 'hero';
        })
    )
    .subscribe(observer);
