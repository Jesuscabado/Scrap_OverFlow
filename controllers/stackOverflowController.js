import Parser from "../utils/parser.js";
import Scraper from "../utils/scraper.js";
import googleSearchController from "./googleSearchController.js";

async function getContent(query){
    const googleLinks = await googleSearchController.searchLinks(`stackoverflow+ ${query}`);
    const url = googleLinks.find((link)=> link.includes("stackoverflow.com/questions"))

    const scraper = new Scraper();
    await scraper.init();
    const html = await scraper.getPageContent(url);
    const parser = new Parser(html);

    const title = parser.getTitle();
    const question = parser.getQuestion();
    const answers = parser.getAnswers();


    await scraper.close();

    return {
        title,
        question,
        answers
    }
}

export default {
    getContent
};