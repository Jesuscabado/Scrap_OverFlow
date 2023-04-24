/**
 * @fileoverview Entry point of the application.
 * @module index
 * @requires express
 * @requires stackOverflowController
 * @requires path
 * @requires dotenv
 * @requires mongoose
 */
import express from "express";
import stackOverflowController from "./controllers/stackOverflowController.js";
import path from "path";
const app = express();

app.get("/", async (req, res) => {
    try {
        const _dirname = path.resolve();
        res.sendFile(_dirname + "/index.html");
    }
    catch (error) {
        res.redirect("https://img.freepik.com/vector-gratis/pagina-error-404-distorsion_23-2148105404.jpg?w=2000");

    }
});

app.get("/search", async (req, res) => {
   
        const  query  = req.query.query;
        const response = await stackOverflowController.getMultipleContents(query);
        console.log(response)
        const { title, question, answers } = response[0];
        res.send(`
        <link rel="stylesheet" type="text/css" href="https://cdn.sstatic.net/Shared/stacks.css?v=83d4b324173a">
        <link rel="stylesheet" type="text/css" href="https://cdn.sstatic.net/Sites/stackoverflow/primary.css?v=c130dd38fbf5">
            <h1>${title}</h1>
            <div>${question.user}</div>
            <div>${question.votes}</div>
            <div>${question.question}</div>
            <div>${answers.map((answer) => `
                <div>${answer.user}</div>
                <div>${answer.votes}</div>
                <div>${answer.answer}</div>
            `).join("")}</div>
       
    
        `);
    
});

/* app.get("/", async (req, res) => {
    const  query  = req.query.q;
    const content = await stackOverflowController.getContent(query);
    res.send(content);
});
 */

app.listen(3000, () => {
    console.log("Server running on port 3000");
}); 