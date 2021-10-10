// ! 52 - distinct

import { of, from, Observer } from 'rxjs';
import { distinct } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const numbers$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');
// * the distinct will only let through the emissions whose values have not been previously emitted
numbers$.pipe(distinct()).subscribe(observer);

interface Character {
    name: string;
}

const characters: Character[] = [
    { name: 'Megaman' },
    { name: 'X' },
    { name: 'Zero' },
    { name: 'Dr. Willy' },
    { name: 'X' },
    { name: 'Megaman' },
    { name: 'Zero' },
];

from(characters)
    .pipe(distinct((p) => p.name))
    .subscribe(console.log);
