let page;

describe("Github page tests", () => {
 beforeEach(async () => {
       page = await browser.newPage();
       await page.goto("https://github.com/team");
     });

 afterEach(() => {
       page.close();
     });


  test("The h1 header content'", async () => {
    await page.setDefaultNavigationTimeout(6000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  });

  test("The first link attribute", async () => {
    await page.setDefaultNavigationTimeout(6000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await page.setDefaultNavigationTimeout(6000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
});

describe("Tests header on other pages application", () => {
  beforeEach(async () => {
        page = await browser.newPage();
      });
    
      afterEach(async () => {
        await page.close();
      });


  test("The h1 header content for Skills'", async () => {
    await page.goto("https://skills.github.com/");
    await page.setDefaultNavigationTimeout(6000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub - skills/introduction-to-github: Get started using GitHub in less than an hour.');
  });

  test("The h1 header content for Features'", async () => {
    await page.goto("https://github.com/features");
    await page.setDefaultNavigationTimeout(6000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('Features | GitHub · GitHub');
  });

  test("The h1 header content for Enterprise'", async () => {
    await page.goto("https://github.com/enterprise");
    await page.setDefaultNavigationTimeout(6000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('The AI Powered Developer Platform. · GitHub');
  });
});