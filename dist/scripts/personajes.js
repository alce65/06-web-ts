import { Asesor } from './asesor.js';
import { Escudero } from './escudero.js';
import { Luchador } from './luchador.js';
import { Rey } from './rey.js';
export function crearPersonajes() {
    const data = [
        new Rey('Joffrey', 'Baratheon', 33, 2),
        new Luchador('Jaime', 'Lannister', 33, 'espada', 8),
        new Luchador('Daenerys', 'Targaryen', 33, 'dragones', 9),
    ];
    data.push(new Asesor('Tyrion', 'Lannister', 33, data[2]));
    data.push(new Escudero('Bronn', 'Aguas Negras', 33, 5, data[1]));
    return data;
}
