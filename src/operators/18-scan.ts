// ! 43 - scan

import { from, Observer } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const numbers = [1, 2, 3, 4, 5];

const total = (accumulator: number, currentValue: number): number => {
    return accumulator + currentValue;
};

// * Reduce
from(numbers).pipe(reduce(total, 0)).subscribe(observer);
// * Scan
from(numbers).pipe(scan(total, 0)).subscribe(observer);

// * Redux
interface User {
    id?: string;
    authenticated?: boolean;
    token?: string;
    age?: number;
}

const user: User[] = [
    {
        id: 'Andy',
        authenticated: false,
        token: null,
    },
    {
        id: 'Andy',
        authenticated: true,
        token: '123qwe',
    },
    {
        id: 'Andy',
        authenticated: true,
        token: '456asd',
    },
];

const state$ = from(user).pipe(
    scan(
        (acc, cur) => {
            return { ...acc, ...cur };
        },
        { age: 29 }
    )
);

const id$ = state$.pipe(map((state) => state));
id$.subscribe(observer);
