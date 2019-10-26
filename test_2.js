import { Selector } from 'testcafe';

fixture `EA Test01`
    .page `https://www.energyaustralia.com.au/`;

test('Login Test', async t => {
    await t
        .expect(Selector('a').withText('Log in').visible).ok()
        .click(Selector('a').withText('Log in'))
          //('.nav navbar-nav').find('a'))
        .typeText('#username','username')
        .typeText('password','password')
        .click('.alpha btn forward')
        .expect(Selector('.alert alert-danger ng-binding ng-scope').innerText).eql('An incorrect Username or Password was specified.');
});
