import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-alam',
  templateUrl: './user-alam.component.html',
  styleUrls: ['./user-alam.component.scss'],
})
export class UserAlamComponent implements OnInit {
 lists: Array<Number> = [1,2,3,4,5,6,7,8,9,10]
  constructor() { }

  ngOnInit() {}

}
