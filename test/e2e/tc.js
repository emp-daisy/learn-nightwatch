module.exports = {
  'Inspirational Search': function (browser) {
    // console.log(browser.Keys.toString());
    console.log(' - - - - - - - - - - - - - - - - - ');
    browser
      .url('http://www.tcdl.io.s3-website-eu-west-1.amazonaws.com/isearch/0.18/index.html')
      .waitForElementVisible('body')
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_home.png')
      .setValue('input[type=text]', 'Span')
      .waitForElementVisible('.list-group-item')
      .pause(500)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_autocomplete.png')
      // simulate the down arrow key being pressed:
      .keys(browser.Keys.DOWN_ARROW)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_autocomplete_click_first.png')
      .click('.list-group-item') // click on "Spanien" in auto suggestions
      .assert.containsText('.tags', 'Spanien') //
      // find the first article on the page:
      .waitForElementVisible('.articleTileImage')
      .pause(500)
      .moveToElement('.tags', 800, 800)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_tags.png')
      .moveToElement('.articleTileImage', 200, 800)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_result_initial.png')
      .moveToElement('.articleTileImage', 200, 800)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_result_article.png')

      .waitForElementVisible('.packageContainer')
      .assert.containsText('.packageContainer', 'Spanien') //
      .moveToElement('.packageContainer', 10, 400)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_result_package.png')
      .click('.packageContainer')
      .pause(500)
      .waitForElementVisible('.bookButton')
      .waitForElementVisible('.hotelPackageImage')
      .assert.containsText('.bookButton', 'SEE PRIS OCH BOKA')
      // .pause(500)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_package.png')
      // click on bookButton
      .click('.bookButton')
      .pause(500)
      .waitForElementVisible('.quickfactheader')
      .assert.containsText('.quickfactheader', 'Hotelfakta')
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_booking_page.png')
      .execute(function () {
        window.history.back()
      })
      .pause(500)
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_package_again.png')
      .click('.backButton')
      .waitForElementVisible('#container')
      .pause(500)
      .assert.containsText('#container', 'Hvor vil du rejse hen')
      .saveScreenshot(GLOBAL.IMGPATH() + 'tc_isearch_home.png')
      .end();
  }
};
