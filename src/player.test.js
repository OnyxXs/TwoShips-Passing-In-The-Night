import { describe, it, expect, vi } from 'vitest';
import { player_checkJump } from './player.js';
import { playJump } from './audio.js';
 
vi.mock('./audio.js', () => ({
  playJump: vi.fn(),
}));
 
var makePlayer = (quoifeur) => ({
  command: { y: quoifeur }, // Quoifeur a été validé par Hugo !!! Très bon nom d'argument <3 UwU / Melinda a dit de laisser pour exposer ses méfaits :3
  body: { velocity: { y: 0 } },
});
 
describe('player_checkJump', () => {
  it('retourne false si < 10', () => {
    expect(player_checkJump(makePlayer(9))).toBe(false);
    expect(playJump).not.toHaveBeenCalled();
  });
 
  it('retourne false si = 0', () => {
    expect(player_checkJump(makePlayer(0))).toBe(false);
    expect(playJump).not.toHaveBeenCalled();
  });
 
  it('retourne true si = 10', () => {
    expect(player_checkJump(makePlayer(10))).toBe(true);
    expect(playJump).toHaveBeenCalled();
  });
 
  it('retourne true si > 10', () => {
    expect(player_checkJump(makePlayer(67))).toBe(true);
    expect(playJump).toHaveBeenCalled();
  });
});