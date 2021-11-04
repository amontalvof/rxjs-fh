// ! 95 - Lab forkJoin function
import { of, forkJoin, Observer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'amontalvof';

forkJoin({
    user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos111111`),
    // .pipe(catchError(() => of([]))),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
    .pipe(catchError((error) => of(error.message)))
    .subscribe(observer);
