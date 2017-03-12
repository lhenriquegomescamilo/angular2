import { WorkingWithServicePage } from './app.po';

describe('working-with-service App', () => {
  let page: WorkingWithServicePage;

  beforeEach(() => {
    page = new WorkingWithServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
