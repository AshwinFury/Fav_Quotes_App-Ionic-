import {Component, OnInit} from "@angular/core";
import { FavouritesPage} from "../favourites/favourites";
import {LibraryPage} from "../library/library";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs selectedIndex="{{slIndex}}">
      <ion-tab [root]="fpage" tabTitle="Favourites" tabIcon="star" style="text-align: center; text-transform: capitalize;"></ion-tab>
      <ion-tab [root]="lpage" tabTitle="Library" tabIcon="book" style="text-align: center; text-transform: capitalize;"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  fpage = FavouritesPage;
  lpage = LibraryPage;

  slIndex = 0;


}
