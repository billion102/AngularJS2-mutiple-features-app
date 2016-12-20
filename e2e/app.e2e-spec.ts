import { AngularJS2MutipleFeaturesAppPage } from './app.po';

describe('angular-js2-mutiple-features-app App', function() {
  let page: AngularJS2MutipleFeaturesAppPage;

  beforeEach(() => {
    page = new AngularJS2MutipleFeaturesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
