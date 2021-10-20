// ! 70 - Differences between getJson and ajax

import { of,Observer } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const handleError = (resp: AjaxError) => {
    console.warn('Error:',resp.message)
    return of({
        ok:false,users:[]
    })
}

const url = 'https://httpbin.orgx/delay/1';

// const obs$ = ajax.getJSON(url).pipe(catchError(handleError));
// const obs2$ = ajax(url).pipe(catchError(handleError));

const obs$ = ajax.getJSON(url);
// const obs2$ = ajax(url);

obs$.pipe(catchError(handleError)).subscribe(observer);
// obs2$.subscribe(data=>console.log('ajax',data));
