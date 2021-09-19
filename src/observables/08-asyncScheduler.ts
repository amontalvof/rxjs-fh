// ! 28 - asyncScheduler
import { asyncScheduler, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

// ? setTimeout
const salute = () => console.log('Hello World');
const salute2 = (name) => console.log(`Hello ${name}`);
asyncScheduler.schedule(salute, 2000);
asyncScheduler.schedule(salute2, 2000, 'Andy');

// ? setInterval do not work with arrow function
const subs = asyncScheduler.schedule(
    function (state) {
        console.log('state', state);
        this.schedule(state + 1, 1000);
    },
    3000,
    0
);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
