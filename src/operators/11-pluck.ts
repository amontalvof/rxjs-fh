// ! 35 - pluck
import { fromEvent, Observer } from 'rxjs';
import { pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$.pipe(pluck('key')).subscribe(observer); //is to access the keys of the objects

keyUp$.pipe(pluck('target','baseURI')).subscribe(observer); //it can also be used with nested objects
