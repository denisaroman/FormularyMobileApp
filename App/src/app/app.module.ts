import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubchaptersPage } from '../pages/subchapters/subchapters';
import { FormularyPage} from '../pages/formulary/formulary';
import { SubstancePage} from '../pages/substance/substance';
import {SubstancesPage} from '../pages/substances/substances';

import { ExpandableComponent} from '../components/expandable/expandable';

import { SortPipe } from '../pipes/sort/sort';

import { Ng2OrderModule } from 'ng2-order-pipe';



//app services goes here 
import {AppService} from '../services/app.service';

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  SubchaptersPage,
  FormularyPage,
  SubstancePage,
  SubstancesPage,
  ExpandableComponent,
  SortPipe
  ],
  imports: [
  BrowserModule,
  HttpModule,
  IonicModule.forRoot(MyApp),
  Ng2OrderModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  SubchaptersPage,
  FormularyPage,
  SubstancePage,
  SubstancesPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  AppService,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
