import { WorkingWithPipelinesPage } from './app.po';

describe('working-with-pipelines App', () => {
  let page: WorkingWithPipelinesPage;

  beforeEach(() => {
    page = new WorkingWithPipelinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
