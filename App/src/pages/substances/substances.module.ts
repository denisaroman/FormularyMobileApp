import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubstancesPage } from './substances';

@NgModule({
  declarations: [
    SubstancesPage,
  ],
  imports: [
    IonicPageModule.forChild(SubstancesPage),
  ],
})
export class SubstancesPageModule {}
