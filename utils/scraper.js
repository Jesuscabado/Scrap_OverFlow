import puppeteer from "puppeteer";
/**
 * Scraper class
 * @class
 * @classdesc Scraper class for scraping web pages
 * @property {object} browser - browser object
 * @property {object} page - page object
 * @property {string} url - url to scrape
 */
class Scraper {
  constructor() {
    this.browser = null;
    this.page = null;
  }
/**
 * Inicializa el navegador y la pagina
 * @method
 * @returns {void}
 * @async
 */
  async init() {
    this.browser = await puppeteer.launch({
      headless:true,
      ignoreDefaultArgs: ['--disable-extensions'],
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
    this.page = await this.browser.newPage();
  }
/** 
 * Obtiene el contenido de la pagina
 * @method
 * @param {string} url - url de la pagina
 * @returns {string} - contenido de la pagina
 * @async
*/
  async getPageContent(url) {
    await this.page.goto(url);
    return await this.page.content();
  }

  async close() {
    await this.browser.close();
  }
}

export default Scraper;
