import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlRelayPageRoutingModule } from './control-relay-routing.module';

import { ControlRelayPage } from './control-relay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlRelayPageRoutingModule
  ],
  declarations: [ControlRelayPage]
})
export class ControlRelayPageModule {}
