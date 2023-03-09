Feature('Leaving a customer review');

Before(async ({ I }) => {
  I.amOnPage('/');
  await I.waitForElement('.name_resto', 1000);
  I.seeElement('.name_resto a');
  I.click(locate('.name_resto a').first());
});

Scenario('Leaving the customer review with success', async ({ I }) => {
  // wait for element
  await I.waitForElement('submit-review');
  I.seeElement('submit-review');

  // filling up the feedback form
  I.fillField('.feedback-name', 'myE2eTest');
  I.fillField('.feedback-content', 'Restorant ini sangat layak untuk dikunjungi ygy, odading mang oleh, hmmm, seperti anda menjadi ant man');

  // submit feedback
  I.click(locate('.submit-review'));

  // if success
  await I.waitForElement('.success-text');
  I.see('Your review has been submitted!', '.success-text');
});
