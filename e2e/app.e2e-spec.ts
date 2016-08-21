import { AOHPage } from './app.po';

describe('aoh App', function() {
  let page: AOHPage;

  beforeEach(() => {
    page = new AOHPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
