/* eslint-disable no-unused-vars */
import { Personaje } from './personaje.js';
export class Asesor extends Personaje {
    jefe;
    constructor(nombre, familia, edad, jefe) {
        super(nombre, familia, edad, 'asesor');
        this.jefe = jefe;
        this.mensaje = 'No se por qué, pero creo que voy a morir pronto';
    }
}
