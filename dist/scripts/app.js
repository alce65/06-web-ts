import { Card } from '../components/card.js';
import { crearPersonajes } from './personajes.js';
function app() {
    const personajes = crearPersonajes();
    console.log(personajes);
    let selector = '.characters-list';
    personajes.forEach((item) => new Card(item, selector));
}
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
