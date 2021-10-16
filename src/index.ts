// ! 67 - error handling

import { fromEvent, Observer } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

const url = 'https://api.github.com/users?per_page=5';

const manageErrors = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
};

const fetchPromise = fetch(url);

fetchPromise
    .then(manageErrors)
    .then((resp) => resp.json())
    .then((data) => console.log('data', data))
    .catch((error) => console.warn('Error in users', error));
