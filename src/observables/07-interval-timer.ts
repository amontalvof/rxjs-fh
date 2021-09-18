// ! 26 and 27 - interval and timer
import { interval, timer, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const todayIn5 = new Date();
todayIn5.setSeconds(todayIn5.getSeconds() + 5);

const interval$ = interval(1000);
const timer1$ = timer(2000, 1000);
const timer2$ = timer(todayIn5);

console.log('start');
// interval$.subscribe(observer);
// timer1$.subscribe(observer);
timer2$.subscribe(observer);
console.log('end');
