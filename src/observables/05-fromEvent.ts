// ! 24 - fromEvent
import { fromEvent, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

/**
 * DOM Events
 */
const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(({ x, y }) => {
    console.log(x, y);
});
src2$.subscribe((event) => {
    console.log(event.key);
});
