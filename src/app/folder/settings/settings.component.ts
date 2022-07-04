import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit { 
  lists: Array<string> = ["A",'AB','AC','AD','B-Ht','H-HT','L-Lt','AC','AD','B-Ht','H-HT','L-Lt']
  constructor() { }

  ngOnInit() {}
  slideOpts = {
    initialSlide: 0,
    speed: 500
};
}
