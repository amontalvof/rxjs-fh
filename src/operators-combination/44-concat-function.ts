// ! 91 - concat function
import { of, interval, concat, Observer } from 'rxjs';
import { take } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const interval$ = interval(1000);

concat(interval$.pipe(take(3)), interval$.pipe(take(2)), of(1)).subscribe(
    observer
);
