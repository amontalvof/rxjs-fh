// ! 36 - mapTo
import {  fromEvent, Observer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$.pipe(mapTo('key pressed')).subscribe(observer); //map the input to what you want to the output