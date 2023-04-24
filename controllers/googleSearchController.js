import Scraper from "../utils/scraper.js";
import Parser from "../utils/parser.js";

/**
 * 
 * @param {*} query 
 * @returns {Array} links
 * @description Get stackoverflow links from google search
 */
async function searchLinks(query) {
    //scraper
    const scraper = new Scraper();
    await scraper.init();
    const encodedQuery = encodeURIComponent(query);
    const url = `https://www.google.com/search?q=${encodedQuery}`;
    const html = await scraper.getPageContent(url);
  
    //parser
    const parser = new Parser(html);
    const links = parser.getLinks();
    await scraper.close();
  
    return links;
  }
  
  export default {
    searchLinks,
  };
  