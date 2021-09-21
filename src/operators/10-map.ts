// ! 34 - map
import { range, fromEvent, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

// const source$ = range(1, 5);
// source$
//     .pipe(map<number, string>((value) => (value * 10).toString()))
//     .subscribe(observer);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$.pipe(map((event) => event.code)).subscribe(observer);
