// ! Observer and subscriber

import { Observable, Observer } from 'rxjs';

const obs$ = new Observable<string>((subs) => {
    subs.next('Hello');
    subs.next('World');

    // * Force a bug
    // const a = undefined;
    // a.name = 'Andy';

    subs.complete();
    subs.next('Hello');
    subs.next('World');
});

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

obs$.subscribe(observer);
