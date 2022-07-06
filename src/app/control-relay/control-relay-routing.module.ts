import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlRelayPage } from './control-relay.page';

const routes: Routes = [
  {
    path: '',
    component: ControlRelayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlRelayPageRoutingModule {}
