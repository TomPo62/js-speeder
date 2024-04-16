import { createAndAppendElement } from '../src/index'

describe('createAndAppendElement', () => {
  it('creates a DIV element', () => {
    const result = createAndAppendElement('div', { content: 'Hello World' }, null);
    expect(result.tagName).toBe('DIV');
    expect(result.innerText).toBe('Hello World'); // Utiliser innerText pour être cohérent avec votre code source
  });

  it('appends the element to a parent', () => {
    document.body.innerHTML = '<div id="test"></div>';
    const parent = document.getElementById('test');
    const element = createAndAppendElement('div', { content: 'Hello World' }, parent);

    expect(parent?.firstChild).toBe(element);
  });
});
