import { CscinemasPage } from './app.po';

describe('cscinemas App', () => {
  let page: CscinemasPage;

  beforeEach(() => {
    page = new CscinemasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
