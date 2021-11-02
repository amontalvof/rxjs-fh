// ! 92 - merge function
import { fromEvent, merge, Observer } from 'rxjs';
import { pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const keyUp$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(keyUp$.pipe(pluck('type')), click$.pipe(pluck('type'))).subscribe(
    observer
);
