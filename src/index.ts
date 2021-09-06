import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const interval$ = new Observable<number>((subscriber) => {
    let counter = 0;
    const interval = setInterval(() => {
        counter += 1;
        subscriber.next(counter);
    }, 1000);
    return () => {
        clearInterval(interval);
        console.log('interval destroyed');
    };
});

const subscription1 = interval$.subscribe((num) => console.log('Num:', num));
const subscription2 = interval$.subscribe((num) => console.log('Num:', num));
const subscription3 = interval$.subscribe((num) => console.log('Num:', num));

setTimeout(() => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();
    console.log('timeout completed');
}, 3000);
