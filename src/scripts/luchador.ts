/* eslint-disable no-unused-vars */
import { Personaje } from './personaje.js';

export class Luchador extends Personaje {
    constructor(
        nombre: string,
        familia: string,
        edad: number,
        public arma: string,
        public destreza: number
    ) {
        super(nombre, familia, edad);
        this.mensaje = 'Primero pego y luego pregunto';
    }
}
