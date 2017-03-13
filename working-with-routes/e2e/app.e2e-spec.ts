import { WorkingWithRoutesPage } from './app.po';

describe('working-with-routes App', () => {
  let page: WorkingWithRoutesPage;

  beforeEach(() => {
    page = new WorkingWithRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
