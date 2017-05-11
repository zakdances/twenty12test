import { TwelveTestWebPage } from './app.po';

describe('twelve-test-web App', () => {
  let page: TwelveTestWebPage;

  beforeEach(() => {
    page = new TwelveTestWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
