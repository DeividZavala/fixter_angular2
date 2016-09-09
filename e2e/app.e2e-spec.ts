import { TallerPage } from './app.po';

describe('taller App', function() {
  let page: TallerPage;

  beforeEach(() => {
    page = new TallerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
