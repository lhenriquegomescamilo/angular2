import { HostlisntenerHostbinbingPage } from './app.po';

describe('hostlisntener-hostbinbing App', () => {
  let page: HostlisntenerHostbinbingPage;

  beforeEach(() => {
    page = new HostlisntenerHostbinbingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
