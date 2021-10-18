// ! 68 - catchError

import { of, Observer } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { auditTime, map, pluck, catchError } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const url = 'https://api.github.com/usersx?per_page=5';

// const manageErrorsFetch = (response: Response) => {
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return response;
// };

// const fetchPromise = fetch(url);

// fetchPromise
//     .then(manageErrorsFetch)
//     .then((resp) => resp.json())
//     .then((data) => console.log('data', data))
//     .catch((error) => console.warn('Error in users', error));

const manageErrorsRxjs = (error: AjaxError) => {
    console.warn('Error in:', error.message);
    return of([]);
};

ajax(url)
    .pipe(pluck('response'), catchError(manageErrorsRxjs))
    .subscribe(observer);
