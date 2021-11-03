// ! 93 - combineLatest function deprecated
import { fromEvent, combineLatest, Observer } from 'rxjs';
import { pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '***************';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// * Helper
const getInputStream = (element: HTMLElement) => {
    return fromEvent<KeyboardEvent>(element, 'keyup').pipe(
        pluck('target', 'value')
    );
};

combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(
    observer
);
