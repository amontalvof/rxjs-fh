// ! 84 - Comparison exercise between the mergeMap, switchMap and exhaustMap

import { fromEvent, interval, Observer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tap, map, take, exhaustMap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

// * Creating a form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitButton = document.createElement('button');

// * Configurations
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

submitButton.innerHTML = 'Submit';

form.append(inputEmail, inputPassword, submitButton);
document.querySelector('body').append(form);

//* Helper
const requestHttpLogin = (userPass) => {
    return ajax.post('https://reqres.in/api/login?delay=1');
};

// * Streams
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit').pipe(
    tap((event) => event.preventDefault()),
    map((event) => ({
        email: event.target[0].value,
        password: event.target[1].value,
    }))
);

submitForm$.subscribe(observer);
