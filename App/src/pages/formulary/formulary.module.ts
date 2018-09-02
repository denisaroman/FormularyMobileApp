import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormularyPage } from './formulary';

@NgModule({
  declarations: [
    FormularyPage,
  ],
  imports: [
    IonicPageModule.forChild(FormularyPage),
  ],
})
export class FormularyPageModule {}
