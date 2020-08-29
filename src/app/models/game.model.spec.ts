import { Game } from './game.model';

describe('Game', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Game(1, 'abc', 'game', 'open', null , null , null , true, null , 1, null , 123456789, null , 1, 3, [])).toBeTruthy();
  });
});
