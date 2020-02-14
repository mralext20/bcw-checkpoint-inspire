import quoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function _draw() {
  let quote = store.State.quote
  document.getElementById("quote").innerText = quote.quote
  document.getElementById("quote-author").innerText = quote.author
  document.getElementById("quote-wrapper").href = quote.url
}
export default class QuoteController {
  constructor() {
    store.subscribe("quote", _draw)
    quoteService.getQuote()
  }
}
