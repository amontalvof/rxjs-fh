// ! 18 and 19 - Subject

import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const interval$ = new Observable<number>((subscriber) => {
    const intervalID = setInterval(() => subscriber.next(Math.random()), 1000);
    return () => {
        console.log('interval destroyed');
        clearInterval(intervalID);
    };
});

/**
 * 1- Multiple casting
 * 2- It is also an observer
 * 3- Next, error, complete
 */
const subject$ = new Subject();

const subscription = interval$.subscribe(subject$);

// const subs1 = interval$.subscribe((rnd) => console.log('subs1', rnd));
// const subs2 = interval$.subscribe((rnd) => console.log('subs2', rnd));

const subs3 = subject$.subscribe(observer);
const subs4 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);
