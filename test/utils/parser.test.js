import Parser from '../../utils/parser.js';
import fs from 'fs';
/**
 * @description Test para el parser
 * @type {Parser}
 * @returns {Parser}
 */
describe('Parser', () => {
    let parser;
    
    beforeAll(() => {
        const html = fs.readFileSync('./test/test.html', 'utf8');
        parser = new Parser(html);
    });

    it(`Deberia conseguir el titulo de la pregunta`, () => {
        const title = parser.getTitle();
        expect(title).toContain('How do I install an R package from source?');
    });

    it(`Deberia conseguir los links de la pagina`, () => {
        const links = parser.getLinks();
        expect(links).toContain('https://stackoverflow.com/');
    });
    
    it(`deberia conseguir una pregunta en formato DOM`, () => {
        const question = parser.getQuestionAsDom();
        expect(question.innerHTML).toContain('I know R reasonably well, but I have no idea how to install a package from source.');
    });
    
    it(`Deberia conseguir el numero de votos de una pregunta`, () => {
        const question = parser.getQuestionAsDom();
        const votes = parser.getDivVote(question);
        expect(votes).toBe(471);
    });


    

    it(`Deberia conseguir la pregunta, el usuario y el numero de votos`, () => {
        const question = parser.getQuestion();
        expect(question.user).toBe('James Risner');
        expect(question.votes).toBe(471);
    });

    it(`Deberia conseguir todos los votos`, () => {
        const votes = parser.getAllVotes();
        expect(votes[0]).toBe(471);
    });
    
    it(`Deberia conseguir la respuesta en formato Dom`, () => {
        const answers = parser.getAnswerAsDom();
       expect(answers[0].innerHTML).toContain('If you have the file locally');
    });

    it(`Deberia conseguir el contenido de la respuesta`, () => {
        const answers = parser.getAnswers();
        expect(answers[0].answer).toContain('If you have the file locally');
    }
    );

});