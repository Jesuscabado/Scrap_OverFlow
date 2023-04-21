import express from "express";
import stackOverflowController from "./controllers/stackOverflowController.js";

const app = express();

app.get("/", async (req, res) => {
    const { query } = req.query.q;
    const { title, paragraphs, question } = await stackOverflowController.getContent(query);
    res.send(`
        <h1>${title}</h1>
        <div>${question}</div>
        <div>${question.user}</div>
        <div>${question.votes}</div>
        <div>${question.question}</div>
        <div>${question.answers.map((answer) => `
            <div>${answer.user}</div>
            <div>${answer.votes}</div>
            <div>${answer.answer}</div>
        `).join("")}</div>
 

    `);
});

app.listen(3997, () => {
    console.log("Server running on port 3997");
});