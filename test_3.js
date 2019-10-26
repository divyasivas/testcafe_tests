import { Selector } from 'testcafe';

fixture `EA Test01`
    .page `https://www.energyaustralia.com.au/myaccount/index.html#!/login`;

const submitButton = Selector('.alpha.btn.forward');
const usernameInput = Selector('#username');
const passwordInput = Selector('#password');
const loginErrorMsg = Selector('.alert.alert-danger.ng-binding.ng-scope')
//.expect(Selector('a').withText('Log in').visible).ok()
//.click(Selector('a').withText('Log in'))
  //('.nav navbar-nav').find('a'))

test('Login Test', async t => {
  await t
    .typeText(usernameInput,'username')
    .typeText(passwordInput,'Password');
    // await t.expect(submitButton.hasAttribute('disabled')).notOk('ready for testing', { timeout: 5000 });
    // await t.expect(submitButton.classNames).notEql(['button-disabled'], { timeout: 5000 });

    await t
        .click(submitButton)
        .expect(loginErrorMsg.innerText).eql('An incorrect Usename or Password was specified.');
});
