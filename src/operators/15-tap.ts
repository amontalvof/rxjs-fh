// ! 39 - tap
import { range, Observer } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const numbers$ = range(1, 5).pipe(
    tap((x) => {
        console.log('before', x);
    }),
    map((value) => value * 10),
    tap(observer)
);

numbers$.subscribe((item) => {
    console.log('subs', item);
});
