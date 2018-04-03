import { render, flush } from '@stencil/core/testing';
import { HeroDmgStats } from './hero-dmg-stats';

describe('hero-dmg-stats', () => {
  it('should build', () => {
    expect(new HeroDmgStats()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [HeroDmgStats],
        html: '<hero-dmg-stats></hero-dmg-stats>'
      });
    });

    it('should work with both the first and the last name', async () => {
      element.first = 'Peter';
      element.last = 'Parker';
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });
});
