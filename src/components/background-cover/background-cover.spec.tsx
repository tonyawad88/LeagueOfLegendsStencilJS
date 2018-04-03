import { render, flush } from '@stencil/core/testing';
import { BackgroundCover } from './background-cover';

describe('background-cover', () => {
  it('should build', () => {
    expect(new BackgroundCover()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [BackgroundCover],
        html: '<background-cover></background-cover>'
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
