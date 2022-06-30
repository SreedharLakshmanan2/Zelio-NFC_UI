import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnose-tab',
  templateUrl: './diagnose-tab.component.html',
  styleUrls: ['./diagnose-tab.component.scss'],
})
export class DiagnoseTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  clickHere(){
    console.log('success')
  }
}
