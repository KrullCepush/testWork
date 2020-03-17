const playwright = require("playwright");

(async () => {
  const browser = await playwright["chromium"].launch();
  const page = await browser.newPage();
  const context = await browser.newContext();

  await page.goto("http://localhost:3000/");
  await page.screenshot({ path: `example-1.png` });

  await page.click("button[type=submit]");
  await page.screenshot({ path: `example-2.png` });

  await page.reload();
  await page.type("input[name=login]", "name");
  await page.click("button[type=submit]");
  await page.screenshot({ path: `example-3.png` });

  await page.reload();
  await page.type("input[name=password]", "name");
  await page.click("button[type=submit]");
  await page.screenshot({ path: `example-4.png` });

  await page.reload();
  await page.type("input[name=login]", "name");
  await page.type("input[name=password]", "name");
  await page.click("button[type=submit]");
  await page.waitForSelector("form");
  await page.screenshot({ path: `example-5.png` });

  await page.reload();
  await page.type("input[name=login]", "demo");
  await page.type("input[name=password]", "name");
  await page.click("button[type=submit]");
  await page.waitForSelector("form");
  await page.screenshot({ path: `example-6.png` });

  await page.reload();
  await page.type("input[name=login]", "demo");
  await page.type("input[name=password]", "demo");
  await page.click("button[type=submit]");
  await page.screenshot({ path: `example-7.png` });

  await page.goto("http://localhost:3000/home");
  await page.screenshot({ path: `example-8.png` });

  await browser.close();
})();

// ##до взаимодействия с backend, т.е. валидация клиентская
// неудачный вход - не введен логин
// неудачный вход - не введен пароль
// неудачный вход - не введены оба

// ##непосредственно сам запрос на вход и реакцию фронта
// неудачный вход - неверный логин
// неудачный вход - неверный пароль
// удачный вход с логином и паролем demo
