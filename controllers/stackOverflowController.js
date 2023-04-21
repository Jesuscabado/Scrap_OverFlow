import Parser from "../utils/parser.js";
import Scraper from "../utils/scraper.js";
import googleSearchController from "./googleSearchController.js";
import Question from "../models/question.js";
import Answer from "../models/answer.js";

async function getContent(query){
    const googleLinks = await googleSearchController.searchLinks(`stackoverflow+ ${query}`);
    const url = googleLinks.find((link)=> link.includes("stackoverflow.com/questions"))
    console.log(url);
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

export default {
    getContent
};