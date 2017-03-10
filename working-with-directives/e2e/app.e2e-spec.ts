import { WorkingWithDirectivesPage } from './app.po';

describe('working-with-directives App', () => {
  let page: WorkingWithDirectivesPage;

  beforeEach(() => {
    page = new WorkingWithDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
