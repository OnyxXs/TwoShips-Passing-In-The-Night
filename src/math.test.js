import { describe, it, expect } from 'vitest';
import { randFloatSpread, mapLinear, lerp, clamp, randFloat } from './math.js';

describe('math.js', () => {
    // Tests fournis

    it('randFloatSpread(1) <= 1', () => expect(randFloatSpread(1) <= 1).toBe(true));
    it('randFloatSpread(1) >= -1', () => expect(randFloatSpread(1) >= -1).toBe(true));

    it('mapLinear(1,2,3,4,5) returns 3', () => expect(mapLinear(1,2,3,4,5)).toBe(3));
    it('mapLinear(1,20,3,40,5) returns 0.882...', () => expect(mapLinear(1,20,3,40,5)).toBeCloseTo(0.882352941176471));

    it('lerp(1,3,20) returns 41', () => expect(lerp(1,3,20)).toBe(41));
    it('lerp(1.3,-7,2) returns -15.3', () => expect(lerp(1.3,-7,2)).toBeCloseTo(-15.3));

    // Tests persos

    // Vérifie que clamp retourne la valeur dans l'intervalle [1, 10] (min et max)
    it('clamp(5,1,10) returns 5', () => expect(clamp(5, 1, 10)).toBe(5)); // valeur normale
    it('clamp(-5,1,10) returns 1', () => expect(clamp(-5, 1, 10)).toBe(1)); // valeur normale dans l'intervalle [-5, 10]
    it('clamp(1,1,10) returns 1', () => expect(clamp(1, 1, 10)).toBe(1)); // limite basse
    it('clamp(10,1,10) returns 10', () => expect(clamp(10, 1, 10)).toBe(10)); // limite haute

    // Vérifie que clamp retourne la valeur dans l'intervalle [1, 15] (min et max)
    it('clamp(15,1,10) returns 10', () => expect(clamp(15, 1, 10)).toBe(10));

    // Vérifie que lerp retourne bien al bonne position sur un axe
    it('lerp(0,10,0.5) returns 5', () => expect(lerp(0, 10, 0.5)).toBe(5)); // 50% donc la valeur au milieu entre 0 et 10
    it('lerp(5,15,1) returns 15', () => expect(lerp(5, 15, 1)).toBe(15)); // 100% donc la valeur la plus haute
    it('lerp(5,15,0) returns 5', () => expect(lerp(5, 15, 0)).toBe(5)); // 0% donc la valeur la plus basse

    // Vérifie que randFloat(0,1) retourne un float aléatoire compris entre 0 et 1 inclus
    it('randFloat(0,1) is between 0 and 1', () => { const v = randFloat(0, 1); expect(v >= 0 && v <= 1).toBe(true); });
});