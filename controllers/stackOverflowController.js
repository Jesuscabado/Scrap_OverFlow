import Parser from "../utils/parser.js";
import Scraper from "../utils/scraper.js";
import googleSearchController from "./googleSearchController.js";
import Question from "../models/question.js";
import Answer from "../models/answer.js";

/**
 * @swagger
 * /api/stackOverflow:
 * get:
 * description: Get stackOverflow content
 * parameters:
 * - name: query
 * description: query to search
 */
async function getContent(query,url){
    const scraper = new Scraper();
    await scraper.init();
    const html = await scraper.getPageContent(url);
    const parser = new Parser(html);
    if(!query ) query = "undefined"
    const title = parser.getTitle();
    const question = parser.getQuestion();
    const answers = parser.getAnswers();
    const questionModel = new Question({
        query,
        title,
        content: question.question,
        user: question.user,
        votes: question.votes 
    });
    await questionModel.save();
    answers.forEach(async (answer) => {
        const answerModel = new Answer({
            question: questionModel._id,
            content: answer.answer,
            user: answer.user,
            votes: answer.votes
        });
        await answerModel.save();
    });
    await scraper.close();

    return {
        title,
        question,
        answers
        
    }
}

/**
 *              
 * @param {*} query 
 * @returns {Array} links
 * @description Get stackoverflow links from google search
 */
async function getStackOverFlowLinks(query){
    const googleLinks = await googleSearchController.searchLinks(`stackoverflow ${query}`);
   return googleLinks.filter((link)=> link.includes("stackoverflow.com/questions"))
}

/**
 * 
 * @param {*} query 
 * @returns {Array} contents
 * @description Get stackoverflow content from google search
 */
async function getMultipleContents(query){
    const links = await getStackOverFlowLinks(query);
    const contents = await Promise.all(links.map((link) => getContent(query, link)));
    return contents;
}
export default {
    getContent,
    getMultipleContents
};