/* eslint-disable no-unused-vars */
export class Personaje {
    nombre;
    familia;
    edad;
    categoria;
    static serie = 'GoT';
    _estadoVivo;
    get estadoVivo() {
        return this._estadoVivo;
    }
    mensaje;
    // public nombre: string;
    constructor(nombre, familia, edad, categoria) {
        this.nombre = nombre;
        this.familia = familia;
        this.edad = edad;
        this.categoria = categoria;
        // this.nombre = nombre
        this._estadoVivo = true;
        this.mensaje = '';
    }
    comunicar() {
        return this.mensaje;
    }
    morir() {
        this._estadoVivo = false;
    }
}
