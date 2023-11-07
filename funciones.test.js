const {suma, mult} = require('./funciones');

test('sumar 1 + 2 es igual a 3', () => {
expect(suma(1, 2)).toBe(3);
});

test('multiplicar 7 * 7 es igual a 49', () => {
    expect(mult(7, 7)).toBe(49);
    });