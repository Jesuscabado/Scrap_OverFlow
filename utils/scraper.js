import puppeteer from "puppeteer";

class Scraper {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless:true,
      ignoreDefaultArgs: ['--disable-extensions'],
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
    this.page = await this.browser.newPage();
  }

  async getPageContent(url) {
    await this.page.goto(url);
    return await this.page.content();
  }

  async close() {
    await this.browser.close();
  }
}

export default Scraper;
