// ! 71 - Post, Put, Delete methods

import { of, Observer } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const handleError = (resp: AjaxError) => {
    console.warn('Error:', resp.message);
    return of({
        ok: false,
        users: [],
    });
};

const url = 'https://httpbin.org/delay/1';

// const obs$ = ajax.post(url,{
//     id:'123qwe',
//     name:'Andy'
// },{
//     'my-token':'456asd'
// });

const obs$ = ajax({
    url,
    method: 'POST',
    body: {
        id: '123qwe',
        name: 'Andy',
    },
    headers: {
        'my-token': '456asd',
    },
});

obs$.pipe(catchError(handleError)).subscribe(observer);
