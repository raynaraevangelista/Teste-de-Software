import {describe, it, expect } from 'vitest';
import { somar, subtrair, multiplicar, dividir } from "./calculadora.js";

describe("calculadora", () => {
    it("Deve somar dois numeros", () => {
        const resultado = somar(1, 2);
        expect(resultado).toBe(3);

    })
    it("Deve subtrair dois numeros", () => {
        const resultado = subtrair(5, 2);
        expect(resultado).toBe(3);
    })
    it("Deve multiplicar dois numeros", () => {
        const resultado = multiplicar(2, 2);
        expect(resultado).toBe(4);
    })
    it("Deve dividir dois numeros", () => {
        const resultado = dividir(4, 2);
        expect(resultado).toBe(2);
    })
})










