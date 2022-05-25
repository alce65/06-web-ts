/* eslint-disable no-unused-vars */
import { Personaje } from './personaje.js';
export class Rey extends Personaje {
    añosReinado;
    constructor(nombre, familia, edad, añosReinado) {
        super(nombre, familia, edad, 'rey');
        this.añosReinado = añosReinado;
        this.mensaje = 'Vais a morir todos';
    }
}
