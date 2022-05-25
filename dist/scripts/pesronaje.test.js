import { Personaje } from './personaje.js';
describe('Given the class Personaje', () => {
    describe('When I instantiate an object  ', () => {
        //  Arrange - Act
        const p = new Personaje('', '', 0);
        test(`Then an object should be created with instance properties: 
            nombre · familia · edad · estadoVivo - mensaje
            and static property serie = "GoT"`, () => {
            // Assert
            expect(p).toBeInstanceOf(Personaje);
            expect(p).toHaveProperty('nombre');
            expect(p).toHaveProperty('familia');
            expect(p).toHaveProperty('edad');
            expect(p).toHaveProperty('estadoVivo');
            expect(p).toHaveProperty('mensaje');
            expect(Personaje.serie).toBe('GoT');
        });
        describe('And run the method comunicar', () => {
            test('then it should return a messaje', () => {
                const expectedMessage = '';
                const result = p.comunicar();
                expect(result).toBe(expectedMessage);
            });
        });
    });
});
// Given - When (And) - Them -> Gerkin
// Arrange - Act - Assert
