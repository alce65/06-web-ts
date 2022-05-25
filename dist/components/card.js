import { emoji } from '../datos/emojis.js';
import { Asesor } from '../scripts/asesor.js';
import { Escudero } from '../scripts/escudero.js';
import { Luchador } from '../scripts/luchador.js';
import { Rey } from '../scripts/rey.js';
import { Component } from './component.js';
import { Comunications } from './comunicaciones.js';
export class Card extends Component {
    personaje;
    template;
    // eslint-disable-next-line no-unused-vars
    constructor(personaje, selector) {
        super();
        this.personaje = personaje;
        this.template = this.createTemplate();
        this.render(selector);
        setTimeout(() => {
            this.manageTemplate();
        }, 100);
    }
    createTemplate() {
        let template = `
        <li class="character col ${this.personaje.nombre}">
            <div class="card character__card">
                <img
                    src="img/${this.personaje.nombre.toLowerCase()}.jpg"
                    alt="${this.personaje.nombre} y ${this.personaje.familia}"
                    class="character__picture card-img-top 
                        ${this.personaje.estadoVivo ? '' : 'reves'}"
                />
                <div class="card-body">
                    <h2 class="character__name card-title h4">
                        ${this.personaje.nombre} y ${this.personaje.familia}
                    </h2>
                    <div class="character__info">
                        <ul class="list-unstyled">
                            <li>Edad: ${this.personaje.edad} años</li>`;
        if (this.personaje.estadoVivo) {
            template += `
                            <li>
                                Estado:
                                 <i class="fas fa-thumbs-up"></i>
                            </li>`;
        }
        else {
            template += `
                            <li>
                                Estado:
                                <i class="fas fa-thumbs-down"></i>
                            </li>`;
        }
        template += `
                        </ul>
                    </div>
                    <div class="character__overlay">
                        <ul class="list-unstyled">`;
        if (this.personaje instanceof Rey) {
            template += `<li>Años de reinado: ${this.personaje.añosReinado}</li>`;
        }
        else if (this.personaje instanceof Luchador) {
            template += `<li>Arma: ${this.personaje.arma}</li>
                    <li>Destreza: ${this.personaje.destreza}</li> `;
        }
        else if (this.personaje instanceof Asesor) {
            template += `<li>Asesora a: ${this.personaje.jefe.nombre}</li> `;
        }
        else if (this.personaje instanceof Escudero) {
            template += `<li>Peloteo: ${this.personaje.sumision}</li>
                    <li>Sirve a: ${this.personaje.amo.nombre}</li>`;
        }
        template += `
                        </ul>
                        <div class="character__actions">
                            <button class="character__action btn">habla</button>
                            <button class="character__action btn">muere</button>
                        </div>
                    </div>
                </div>
                <i class="emoji">
                ${emoji[this.personaje.categoria]}
                </i>
            </div>
        </li>
        `;
        return template;
    }
    manageTemplate() {
        document
            .querySelectorAll(`.${this.personaje.nombre} button`)
            .forEach((item) => item.addEventListener('click', this.handleClick.bind(this)));
        console.log(document.querySelectorAll(`.${this.personaje.nombre} button`));
    }
    handleClick(ev) {
        if (ev.target.textContent === 'habla') {
            console.log(this.personaje.comunicar());
            const selector = '.comunications';
            const element = document.querySelector(selector);
            element.classList.toggle('on');
            new Comunications(this.personaje, selector);
            setTimeout(() => {
                element.classList.toggle('on');
                element.innerHTML = '';
            }, 2000);
        }
        else {
            console.log('Muerooo', this.personaje.nombre);
            this.personaje.morir();
            this.template = this.createTemplate();
            this.outRender(`.${this.personaje.nombre}`);
        }
    }
}
