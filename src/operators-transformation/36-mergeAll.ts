// ! 76 and 77- mergeAll

import { fromEvent, Observer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, map, debounceTime, mergeAll } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

// * References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// * Helpers
const showUsers = (users) => {
    orderList.innerHTML = '';
    for (const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'see page';
        anchor.target = '_blank';
        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
};

// * Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
    .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        map((text) =>
            ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
        ),
        mergeAll(),
        pluck('items')
    )
    .subscribe(showUsers);
