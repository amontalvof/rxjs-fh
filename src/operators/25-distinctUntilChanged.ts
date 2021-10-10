// ! 53 - distinctUntilChanged

import { of, from, Observer } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const numbers$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');
numbers$.pipe(distinctUntilChanged()).subscribe(observer);

interface Character {
    name: string;
}

const characters: Character[] = [
    { name: 'Megaman' },
    { name: 'Megaman' },
    { name: 'Zero' },
    { name: 'Dr. Willy' },
    { name: 'X' },
    { name: 'X' },
    { name: 'Zero' },
];

from(characters)
    .pipe(
        distinctUntilChanged(
            (previous, current) => previous.name === current.name
        )
    )
    .subscribe(console.log);
