import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protection-tab',
  templateUrl: './protection-tab.component.html',
  styleUrls: ['./protection-tab.component.scss'],
})
export class ProtectionTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  clickHere() {
    console.log("ButtonTapped")
  }
}
