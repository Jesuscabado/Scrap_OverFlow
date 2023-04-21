import jsdom from "jsdom";

/**
 * Clase que se encarga de parsear el html de la pagina web
 * @class 
 */
class Parser {
  /**
   * Constructor de la clase
   * @constructor
   * @param {string} html - html de la pagina web
   */
   
  constructor(html) {
    /**
     * @property {string} html - html de la pagina web
     * @private
     */
    this.html = html;
    this.loadDocument();
  }
  /**
   * Carga el html en el documento
   * @method
   * @private 
   * @returns {void}
   */
  loadDocument() {
    const JSDOM = jsdom.JSDOM;
    const dom = new JSDOM(this.html);
    this.document = dom.window.document;
  }
  /** 
   * Obtiene el titulo de la pagina
   * @method
   * @returns {string} titulo de la pagina
   */
  getTitle() {
    return this.document.querySelector("h1").textContent.trim();
  }

  getLinks() {
    const links = Array.from(this.document.querySelectorAll("a"));
    return links.map((link) => link.href);
  }
  
  
  /**
   * Obtiene el contenido de la pregunta, el usuario y el numero de votos
   * @method
   * @returns {object} - objeto con el contenido de la pregunta, el usuario y el numero de votos 
   */
  getQuestion() {
    const question = this.getQuestionAsDom();
    const votes = this.getDivVote(question);
    const user = this.getUser(question);
    return {
      votes,
      user,
      question: question.outerHTML
    };
  }
  
  /**
   * Obtiene la pregunta en formato DOM
   * @method
   * @returns 
   */
  getQuestionAsDom() {
    return this.document.querySelector(".question");
  }

  /**
   * Obtiene el usuario
   * @method
   * @returns 
   */
  getUser(element) {
    const user = element.querySelector("div.user-details a").textContent;
    return user;
  }
  /**
   * Obtiene el numero de votos de una pregunta
   * @method
   * @returns 
   */
  getDivVote(element) {
    const votes = element.querySelector("div.js-vote-count").textContent;
    return parseInt(votes);
  }
  /**
   * Obtiene todos los usuarios de la pagina
   * @method
   * @returns 
   */
  getAllUser () {
    const user = Array.from(this.document.querySelectorAll("div.user-details a"));
    return user.map((u) => u.textContent);
  }
  /**
   * Obtiene todos los votos de la pagina
   * @method
   * @returns 
   */
  getAllVotes () {
    const votes = Array.from(this.document.querySelectorAll("div.js-vote-count"));
    return votes.map((v) => parseInt(v.textContent));
  }
  /**
   * Obtiene todas las respuestas de la pagina
   * @method
   * @returns
   */
  getAnswerAsDom() {
    return Array.from(this.document.querySelectorAll(".answer"));
  }
  /**
   * Obtiene el contenido de las respuestas, el usuario y el numero de votos
   * @method
   * @returns {object} - objeto con el contenido de las respuestas, el usuario y el numero de votos
   */
  getAnswers() {
    const answers = this.getAnswerAsDom();
    return answers.map((answers)=> {

    })
    const votes = this.getDivVote(answers);
    const user = this.getUser(answers);
    return {
      votes,
      user,
      answer: answers.outerHTML
    };

  }



  
}

export default Parser;

  