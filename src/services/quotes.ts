import {Quote} from "../data/quotes.interface";

export class QuotesService {
  private favouriteQuotes: Quote[] = [];

  addQuoteTofavourites(quote: Quote) {
    this.favouriteQuotes.push(quote);
    console.log('Added a quote to Favourites');
    console.log('Quote is :' + quote.text);
  }

  removeQuoteFromFavourites(quote: Quote) {

    const position = this.favouriteQuotes.findIndex(
      (quoteEl: Quote) => {
        return quoteEl.id == quote.id;
    });

    this.favouriteQuotes.splice(position,1);
  }

  getFavouriteQuotes() {
    return this.favouriteQuotes.slice();
  }

  isFavourites(quote: Quote) {
    return this.favouriteQuotes.find( (quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }

}
