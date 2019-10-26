import {Selector} from 'testcafe';

const loginButton = Selector('.nav.navbar-nav').find('a');
const header = Selector('.ng-scope');
const homePageTestHeader = Selector('.feature-banner__overlay__heading.type-h1');
//*[@id="login"]/div/h1
fixture `Login`
  .page `https://www.energyaustralia.com.au`
  // .meta({env: 'prod',flow: 'negative'}) //both meta definition types work
  .meta('env','prod')
  .meta('flow','negative');

test('InvalidLogin', async t => {
  await t
    .expect(homePageTestHeader.innerText).eql('Total Plan. It ticks the boxes.')
    .click(loginButton);
  await t
    .takeScreenshot('./pics')
    .expect(header.textContent).contains('Welcome')
    .takeScreenshot('./pics');

});
