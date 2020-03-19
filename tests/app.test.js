const playwright = require("playwright");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

const browserType = "chromium";

const url1 = "http://localhost:3000/";
const url2 = "http://localhost:3000/home";

const viewport = { width: 1024, height: 768 };

it('Case 1 - "Tests that page just renders"', async () => {
  let browser1, context1, page1, image1;

  try {
    browser1 = await playwright[browserType].launch();
    context1 = await browser1.newContext({ viewport });
    page1 = await context1.newPage();
    await page1.goto(url1);
    await page1.waitForSelector("form");
    image1 = await page1.screenshot();
    expect(image1).toMatchImageSnapshot();
  } catch (error) {
    throw error;
  } finally {
    await browser1.close();
  }
});

it('Case 2 - "Tests empty inputs"', async () => {
  let browser1, context1, page1, image1;

  try {
    browser1 = await playwright[browserType].launch();
    context1 = await browser1.newContext({ viewport });
    page1 = await context1.newPage();
    await page1.goto(url1);
    await page1.waitForSelector("form");
    await page1.click("button[type=submit]");
    image1 = await page1.screenshot();
    expect(image1).toMatchImageSnapshot();
  } catch (error) {
    throw error;
  } finally {
    await browser1.close();
  }
});

it('Case 3 - "Tests empty password"', async () => {
  let browser1, context1, page1, image1;

  try {
    browser1 = await playwright[browserType].launch();
    context1 = await browser1.newContext({ viewport });
    page1 = await context1.newPage();
    await page1.goto(url1);
    await page1.waitForSelector("form");
    await page1.type("input[name=login]", "avb");
    await page1.click("button[type=submit]");
    image1 = await page1.screenshot();
    expect(image1).toMatchImageSnapshot();
  } catch (error) {
    throw error;
  } finally {
    await browser1.close();
  }
});

it('Case 4 - "Tests empty login"', async () => {
  let browser1, context1, page1, image1;

  try {
    browser1 = await playwright[browserType].launch();
    context1 = await browser1.newContext({ viewport });
    page1 = await context1.newPage();
    await page1.goto(url1);
    await page1.waitForSelector("form");
    await page1.type("input[name=password]", "avb");
    await page1.click("button[type=submit]");
    image1 = await page1.screenshot();
    expect(image1).toMatchImageSnapshot();
  } catch (error) {
    throw error;
  } finally {
    await browser1.close();
  }
});

it('Case 5 - "Tests wrong data 3 characters"', async () => {
  let browser1, context1, page1, image1;

  try {
    browser1 = await playwright[browserType].launch();
    context1 = await browser1.newContext({ viewport });
    page1 = await context1.newPage();
    await page1.goto(url1);
    await page1.waitForSelector("form");
    await page1.type("input[name=login]", "avb");
    await page1.type("input[name=password]", "avb");
    await page1.click("button[type=submit]");
    image1 = await page1.screenshot();
    expect(image1).toMatchImageSnapshot();
  } catch (error) {
    throw error;
  } finally {
    await browser1.close();
  }
});

it('Case 6 - "Tests wrong login"', async () => {
  let browser1, context1, page1, image1;

  try {
    browser1 = await playwright[browserType].launch();
    context1 = await browser1.newContext({ viewport });
    page1 = await context1.newPage();
    await page1.goto(url1);
    await page1.waitForSelector("form");
    await page1.type("input[name=login]", "demos");
    await page1.type("input[name=password]", "demo");
    await page1.click("button[type=submit]");
    await page1.waitFor(1500); // preloader
    image1 = await page1.screenshot();
    expect(image1).toMatchImageSnapshot();
  } catch (error) {
    throw error;
  } finally {
    await browser1.close();
  }
});

it('Case 7 - "Tests wrong password"', async () => {
  let browser1, context1, page1, image1;

  try {
    browser1 = await playwright[browserType].launch();
    context1 = await browser1.newContext({ viewport });
    page1 = await context1.newPage();
    await page1.goto(url1);
    await page1.waitForSelector("form");
    await page1.type("input[name=login]", "demos");
    await page1.type("input[name=password]", "demo");
    await page1.click("button[type=submit]");
    await page1.waitFor(1500); // preloader
    image1 = await page1.screenshot();
    expect(image1).toMatchImageSnapshot();
  } catch (error) {
    throw error;
  } finally {
    await browser1.close();
  }
});

it('Case 8 - "Tests at correct information"', async () => {
  let browser1, context1, page1, image1;

  try {
    browser1 = await playwright[browserType].launch();
    context1 = await browser1.newContext({ viewport });
    page1 = await context1.newPage();
    await page1.goto(url1);
    await page1.waitForSelector("form");
    await page1.type("input[name=login]", "demo");
    await page1.type("input[name=password]", "demo");
    await page1.click("button[type=submit]");
    await page1.waitFor(1500); // preloader
    image1 = await page1.screenshot();
    expect(image1).toMatchImageSnapshot();
  } catch (error) {
    throw error;
  } finally {
    await browser1.close();
  }
});
