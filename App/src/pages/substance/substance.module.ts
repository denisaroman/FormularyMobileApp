import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubstancePage } from './substance';

@NgModule({
  declarations: [
    SubstancePage,
  ],
  imports: [
    IonicPageModule.forChild(SubstancePage),
  ],
})
export class SubstancePageModule {}
