import { Component } from '@angular/core';
import {IonicPage, MenuController, ModalController} from 'ionic-angular';
import {Quote} from "../../data/quotes.interface";
import {QuotesService} from "../../services/quotes";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/settings";


@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes: Quote[];

  constructor(private qtsService: QuotesService,private modalCtrl: ModalController, private menuCtrl: MenuController, private settingsService: SettingsService) {}

  ionViewWillEnter() {
    this.quotes = this.qtsService.getFavouriteQuotes();
  }


  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      console.log(remove);
      if(remove) {
        this.onRemoveFromFavourites(quote);
      }

    });
  }

  onRemoveFromFavourites(quote: Quote) {
    this.qtsService.removeQuoteFromFavourites(quote);
    this.quotes = this.qtsService.getFavouriteQuotes();
  }

  onOpenMenu() {
    this.menuCtrl.open();
  }

  ifAltBg() {
    return this.settingsService.isaltBg();
  }
}
