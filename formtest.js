import {Selector} from 'testcafe';
import {ClientFunction} from 'testcafe';

const getUrl = ClientFunction(() => window.location.href);
const url = "https://www.seleniumeasy.com/test/";
const formMenu = Selector('a').withText('Input Forms');
const formLink = Selector('a').withText('Simple Form Demo');
const inputFormHeading = Selector('.col-md-6.text-left').child('h3');
const singleInputAccordionHeading = Selector('div').withText('Single Input Field');
const sinlgeInputMessageBox = Selector('#user-message');
const singleInputSubmitBtn = Selector('button').withText('Show Message');
const singleInputOutputMessage = Selector('#display');

fixture `Form Page Tests`
    .page(url)
    .meta('page', 'FormPage');

test
    .meta('accordion', 'Single Input')
    ('Single Input', async t =>{
      await t
      .click(formMenu);

      await t
      .click(formLink);

      await t
      const url = await getUrl()
      console.log(url);

      await t
      .expect(inputFormHeading.innerText).contains('This would be your first example to start with Selenium.')
      .expect(singleInputAccordionHeading.innerText).contains('Single Input Field')
      .typeText(sinlgeInputMessageBox, 'Hello World!')
      .click(singleInputSubmitBtn);
      await t
      .expect(singleInputOutputMessage.innerText).contains('Hello World!')
      //const output = singleInputOutputMessage.innerText;
      const output = await singleInputOutputMessage.innerText
      console.log(output);

});
