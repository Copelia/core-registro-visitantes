const { add } = require('./calculator.js');
describe('add, sumar numeros', () => {
    test('suma dos numeros, 7, 11', () => {
        expect(add(7,11)).toBe(18);
    });
    test('suma dos numeros, 20, -100', () =>{
        expect(add(20, -100)).toBe(-80);
    });
    test('suma de 1 numero, 53', () =>{
        expect(add(53)).toBe(53);
    });
    test('suma ningun número, 0', () =>{
        expect(add()).toBe(0);
    });
})

const { substract } = require('./calculator.js');

describe('substract, restar numeros', () =>{
    test('resta dos numeros, 5, 10', ()=>{
        expect(substract(7,11)).toBe(-4);
    });
    test('resta dos numeros, 20, -100', () =>{
        expect(substract(20, -100)).toBe(120);
    });
    test('resta de 1 numero, 53', () =>{
        expect(substract(53)).toBe(53);
    });
    test('resta ningun numero, 0', () =>{
        expect(substract()).toBe(0);
    });
}) 