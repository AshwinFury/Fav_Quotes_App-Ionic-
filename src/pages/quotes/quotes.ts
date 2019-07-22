import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavParams} from 'ionic-angular';

import {Quote} from "../../data/quotes.interface";
import {QuotesService} from "../../services/quotes";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navParams: NavParams, private alertCtrl:  AlertController, private quotesService: QuotesService) {}

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavourite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add To Favourites',
      subTitle: 'Are you Sure',
      message: 'This will add quotes to favourite list',
      buttons: [
        {
          text: 'Add Quote',
          handler: () => {
            this.quotesService.addQuoteTofavourites(selectedQuote);
            console.log('OK');
          }
        },
        {
          role: 'cancel',
          text: 'Cancel',
          handler: () => {
            console.log('Action Cancelled!');
          }
        }
      ]
    });

    alert.present();

  }

  onRemoveFromFavourite(quote: Quote) {
    const alert =this.alertCtrl.create({
      title: 'Remove from Favourites',
      message: 'The quote will be removed from Favourites',
      buttons: [
        {
          text: 'Remove Quote',
          handler: () => {
            this.quotesService.removeQuoteFromFavourites(quote);
          }
        },
        {
          role: 'cancel',
          text: 'Cancel',
          handler: () =>{
            console.log('Quote removal cancelled');
          }
        }
      ]
    });

    alert.present();
  }

  isFavourite(quote: Quote) {
    return this.quotesService.isFavourites(quote);
  }
}
