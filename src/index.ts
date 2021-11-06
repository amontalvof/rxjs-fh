// ! 104 - Luke Skywalker exercise
/**
 * Exercise:
 * Make 2 HTTP requests (ajax) one after another.
 *
 * The first one must obtain the Star Wars character:
 * Luke Skywalker, calling the endpoint: / people / 1 /
 *
 * The second request must be using the object
 * from the previous request, and take the starships (starships),
 * which is an array of URLs (array), within that array,
 * take the first position and make the call to that URL,
 * which should bring information about your starships
 */

// Expected response:
// Information about starship in the Star Wars universe
// Example of the expected data

// Expected response with Greater difficulty
// Return the following object with the information of both requests
// Remembering that they fire one after the other,
// with the URL that comes inside the array of 'starships'

// Tip: investigate the zip function:
// That allows combining observables in an array of values
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

import { zip, of, Observer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const observer: Observer<any> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completed'),
};

(() => {
    // Do not touch ========================================================
    const SW_API = 'https://swapi.dev/api';
    const getRequest = (url: string) => ajax.getJSON<any>(url);
    // ==================================================================

    // Call the URL to get Luke Skywalker
    getRequest(`${SW_API}/people/1`)
        .pipe(
            switchMap((resp) => zip(of(resp), getRequest(resp.starships[0]))),
            map(([character, starship]) => ({ character, starship }))
        )
        .subscribe(observer);
    // =======================================
})();
