import { WorkingWithNgContentPage } from './app.po';

describe('working-with-ng-content App', () => {
  let page: WorkingWithNgContentPage;

  beforeEach(() => {
    page = new WorkingWithNgContentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
