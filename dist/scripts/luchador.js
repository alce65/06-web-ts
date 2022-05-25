/* eslint-disable no-unused-vars */
import { Personaje } from './personaje.js';
export class Luchador extends Personaje {
    arma;
    destreza;
    constructor(nombre, familia, edad, arma, destreza) {
        super(nombre, familia, edad, 'luchador');
        this.arma = arma;
        this.destreza = destreza;
        this.mensaje = 'Primero pego y luego pregunto';
    }
}
