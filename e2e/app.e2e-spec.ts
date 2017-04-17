import { CurdemoPage } from './app.po';

describe('curdemo App', () => {
  let page: CurdemoPage;

  beforeEach(() => {
    page = new CurdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
