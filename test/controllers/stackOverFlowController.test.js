import stackOverflowController from "../../controllers/stackOverflowController.js";

describe("stackOverflowController", () => {
    it("Deberia conseguir el contenido de una pagina de stackoverflow", async () => {
        const query = "javascript";
        const { title, question, answers} = await stackOverflowController.getContent(query);
        expect(title).toContain("Javascript");
        expect(question).toContain("Javascript");
        expect(answers).toContain("Javascript");

    }, 20000);
});