import express from "express";
import stackOverflowController from "./controllers/stackOverflowController.js";
import router from "./routes/router.js";

const app = express();

/* app.get("/", async (req, res) => {
    const  query  = req.query.q;
    const { title, question, answers } = await stackOverflowController.getContent(query);
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
        `).join("")}</div>
 

    `);
}); */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.use("/", router);
app.listen(3001, () => {
    console.log("Server running on port 3001");
}); 