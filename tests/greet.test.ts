import { greet } from '../src/index';

describe('greet function', () => {
  it('should greet the user with a proper message', () => {
    const result = greet('Toto');
    expect(result).toBe('Hello, Toto!');
  });
});
