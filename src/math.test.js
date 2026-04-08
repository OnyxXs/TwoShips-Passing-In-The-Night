import { describe, it, expect } from 'vitest';
import { randFloatSpread, mapLinear, lerp } from './math.js';

describe('math.js', () => {
  it('randFloatSpread(1) <= 1', () => expect(randFloatSpread(1) <= 1).toBe(true));
  it('randFloatSpread(1) >= -1', () => expect(randFloatSpread(1) >= -1).toBe(true));
  it('mapLinear(1,2,3,4,5) returns 3', () => expect(mapLinear(1,2,3,4,5)).toBe(3));
  it('mapLinear(1,20,3,40,5) returns 0.882...', () => expect(mapLinear(1,20,3,40,5)).toBeCloseTo(0.882352941176471));
  it('lerp(1,3,20) returns 41', () => expect(lerp(1,3,20)).toBe(41));
  it('lerp(1.3,-7,2) returns -15.3', () => expect(lerp(1.3,-7,2)).toBeCloseTo(-15.3));
});