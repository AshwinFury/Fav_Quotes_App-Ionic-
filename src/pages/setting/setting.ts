import { Component } from '@angular/core';
import {IonicPage, Toggle} from 'ionic-angular';
import {SettingsService} from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(private settingsService: SettingsService) {}

  ontoggle(toggle: Toggle) {
    console.log(toggle);

    this.settingsService.setBg(toggle.checked);
  }

  chkAltBg() {
    return  this.settingsService.isaltBg();
  }
}
