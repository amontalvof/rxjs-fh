// ! 40 and 41 - progress bar
import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import loremText from './loremText';

const text = document.createElement('div');
text.innerHTML = loremText;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

const calculateScrollPercent = (event) => {
    const { scrollTop, scrollHeight, clientHeight } =
        event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(map(calculateScrollPercent), tap(console.log));
progress$.subscribe((percent) => {
    progressBar.style.width = `${percent}%`;
});
