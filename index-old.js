import { createElement } from './utils';

let count = 0;

function inc() {
    count += 1;
    document.getElementById('h1').textContent = count;
}

const $button = createElement('button', null, 'Increment', {
    click: () => {
        inc();
    }
});

const $h1 = createElement('h1', 'h1', '0');