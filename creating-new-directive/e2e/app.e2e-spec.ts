import { CreatingNewDirectivePage } from './app.po';

describe('creating-new-directive App', () => {
  let page: CreatingNewDirectivePage;

  beforeEach(() => {
    page = new CreatingNewDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
