/* eslint-disable no-unused-vars */
import { Personaje } from './personaje.js';

export class Asesor extends Personaje {
    constructor(
        nombre: string,
        familia: string,
        edad: number,
        public jefe: Personaje
    ) {
        super(nombre, familia, edad);
        this.mensaje = 'No se por qué, pero creo que voy a morir pronto';
    }
}
