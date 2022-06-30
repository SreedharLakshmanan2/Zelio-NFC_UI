import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { BasicSettingComponent } from './basic-setting/basic-setting.component';
import { SettingsComponent } from './settings/settings.component';
import { DiagnoseTabComponent } from './diagnose-tab/diagnose-tab.component';
import { ProtectionTabComponent } from './protection-tab/protection-tab.component';
import { UserAlamComponent } from './user-alam/user-alam.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage,BasicSettingComponent,SettingsComponent,DiagnoseTabComponent,ProtectionTabComponent,UserAlamComponent]
})
export class FolderPageModule {}
