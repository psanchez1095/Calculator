//Pruebas Unitarias con Mocha y Chai

// Para ejecutar el test basta con escribir mocha test en la linea de comandos


const chai = require('chai')
const expect = chai.expect
const calculadora = require('../src/calculadora')

describe('Calculadora', () => {
    describe('Suma', () => {
        it('1 + 1 es igual  2', () => {
            expect(calculadora.sumar(1, 1)).to.equal(2)
        })
        it('Deberia sumar dos numeros', () => {
            expect(calculadora.sumar(2, 2)).to.equal(4)
            expect(calculadora.sumar(50, 40)).to.equal(89)
            expect(calculadora.sumar(-31, 32)).to.equal(1)
            expect(calculadora.sumar(10000, 99999)).to.equal(99999)
        })
    })

    describe('Resta', () => {
        it('1 - 1 es igual a 0', () => {
            expect(calculadora.restar(1, 1)).to.equal(0)
        })
        it('Deberia restar dos numeros', () => {
            expect(calculadora.restar(6, 2)).to.equal(4)
            expect(calculadora.restar(50, 39)).to.equal(11)
            expect(calculadora.restar(-31, 32)).to.equal(-63)
            expect(calculadora.restar(10000, 89999)).to.equal(-79999)
        })
    })

    describe('Multiplicacion', () => {
        it('1 * 1 es igual a 1', () => {
            expect(calculadora.multiplicar(1, 1)).to.equal(1)
        })
        it('Debería multiplicar', () => {
            expect(calculadora.multiplicar(3, 2)).to.equal(6)
            expect(calculadora.multiplicar(50, 39)).to.equal(1950)
            expect(calculadora.multiplicar(-31, 32)).to.equal(-992)
            expect(calculadora.multiplicar(-5, -2)).to.equal(10)
        })
    })

    describe('Division', () => {
        it('1 / 1 es igual a 1', () => {
            expect(calculadora.dividir(1, 1)).to.equal(1)
        })
        it('Debería dividir dos números', () => {
            expect(calculadora.dividir(4, 2)).to.equal(2)
            expect(calculadora.dividir(50, 5)).to.equal(10)
            expect(calculadora.dividir(-15, 2)).to.equal(-7.5)
        })
        it('Debería retornar NaN ya que el denominador es cero', () => {
            expect(calculadora.dividir(4, 0)).to.equal(undefined)
            expect(calculadora.dividir(50, 0)).to.equal(undefined)
            expect(calculadora.dividir(-15, 0)).to.equal(undefined)
        })
    })
})