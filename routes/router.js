import { Router } from 'express';
import googleSearchController from '../controllers/googleSearchController.js';
import stackOverflowController from '../controllers/stackOverflowController.js';

const router = Router();
router.get('/', async (req, res) => {
    const query = req.query.q;
    const googleLinks = await googleSearchController.searchLinks(`stackoverflow+ ${query}`);
    const url = googleLinks.find((link) => link.includes('stackoverflow.com/questions'));
    console.log(url);
    const { title, question, answers } = await stackOverflowController.getContent(url);
    res.send(`
        <link rel="stylesheet" type="text/css" href="https://cdn.sstatic.net/Shared/stacks.css?v=83d4b324173a">
        <link rel="stylesheet" type="text/css" href="https://cdn.sstatic.net/Sites/stackoverflow/primary.css?v=c130dd38fbf5">
            <h1>${title}</h1>
            <div>${question}</div>
            <div>${question.user}</div>
            <div>${question.votes}</div>
            <div>${question.question}</div>
            <div>${answers.map((answer) => `
                <div>${answer.user}</div>
                <div>${answer.votes}</div>
                <div>${answer.answer}</div>
            `).join('')}</div>
     
    
        `);
    }
);

export default router;
