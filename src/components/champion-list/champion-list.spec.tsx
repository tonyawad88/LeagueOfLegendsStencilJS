import { render, flush } from '@stencil/core/testing';
import { ChampionList } from './champion-list';

describe('champion-summary', () => {
  it('should build', () => {
    expect(new ChampionList()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [ChampionList],
        html: '<champion-summary></champion-summary>'
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
