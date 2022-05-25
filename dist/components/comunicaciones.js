import { Component } from './component.js';
export class Comunications extends Component {
    personaje;
    template;
    constructor(personaje, selector) {
        super();
        this.personaje = personaje;
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        const template = `
            <p class="comunications__text display-1">
            ${this.personaje.comunicar()}
            </p>
            <img
                class="comunications__picture"
                src="img/${this.personaje.nombre.toLowerCase()}.jpg"
                alt="${this.personaje.nombre} y ${this.personaje.familia} del que habla"
            />`;
        return template;
    }
}
