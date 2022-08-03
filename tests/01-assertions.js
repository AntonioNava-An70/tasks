describe("The Login Page", () => {
  before((browser) => {
    browser
    .windowMaximize()
    .init()
    .waitForElementVisible('body')
  });

  it("Demo Text Box", () => {
    browser
      .navigateTo("/text-box")
      .waitForElementVisible("#userName-label")

      .assert.attributeContains(
        'form div[id="userEmail-wrapper"] div input',
        "placeholder",
        "name@example"
      )

      .assert.attributeEquals("#userName", "placeholder", "Full Name")

      .assert.textContains(
        'form div[id="permanentAddress-wrapper"] div label',
        "Permanent Address",
        "Verifying that the Address is being displayed"
      )

      .assert.cssProperty("#submit", "display", "inline-block")

      .assert.cssProperty(
        'form div[id="permanentAddress-wrapper"] div label',
        "display",
        "inline-block"
      )
      .end();
  });

  it("Demo Practice Form", () => {
    browser
      .navigateTo("/automation-practice-form")
      .waitForElementVisible('body')

      .assert.valueEquals("#dateOfBirthInput", "03 Aug 2022")

      .assert.valueContains("#dateOfBirthInput", "03 Aug")
      .end();
  });

  it("Demo Practice Form", () => {
    browser
      .navigateTo("/automation-practice-form")
      .waitForElementVisible('body')

      .assert.valueEquals("#dateOfBirthInput", "03 Aug 2022")

      .assert.valueContains("#dateOfBirthInput", "03 Aug")
      .end();
  });

  it("Demo Extra Assertions", () => {
    browser
      .navigateTo("/accordian")
      .waitForElementVisible('body')
      .assert.visible("#section1Content", "First Card should be displayed ")

      .assert.not.visible(
        "#section2Content",
        "Second Card should not be displayed "
      )

      .assert.titleEquals('ToolsQA', 'The Page Title should be ToolsQA in TitleCase')
      
      .assert.urlEquals('https://demoqa.com/accordian', "The URL should be equals to https://demoqa.com/accordian")
      
      .assert.urlContains('/accordian', 'Verify that it is the accordian page')
      .end();
  });

  after(() => {
    browser.end();
  });
});

//TODO: assert[.not].title()
//TODO: assert[.not].urlContains()
//TODO: assert[.not].urlEquals()
