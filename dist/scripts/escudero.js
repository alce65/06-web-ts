import { Personaje } from './personaje.js';
export class Escudero extends Personaje {
    sumision;
    amo;
    constructor(nombre, familia, edad, sumision, amo) {
        super(nombre, familia, edad, 'escudero');
        this.sumision = sumision;
        this.amo = amo;
        this.mensaje = 'Soy un looser';
    }
}
