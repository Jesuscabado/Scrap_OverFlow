import stackOverflowController from "../../controllers/stackOverflowController.js";

describe("stackOverflowController", () => {
    it("Deberia conseguir el contenido de una pagina de stackoverflow", async () => {
        const query = "How do I install an R package from source?";
        const { title, question, answers } = await stackOverflowController.getContent(query);
        expect(title).toBe("How do I install an R package from source?");
        expect(question.user).toBe("James Risner");
        expect(question.votes).toBe(472);
        expect(question.question).toContain("I know R reasonably well, but I have no idea how to install a package from source.");
        expect(answers[0].user).toBe("Shane");
        expect(answers[0].votes).toBe(593);
        expect(answers[0].answer).toContain("If you have the file locally,");
    }, 20000);
});