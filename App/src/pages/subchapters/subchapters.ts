import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AppService} from '../../services/app.service';
import { FormularyPage } from '../formulary/formulary';

/**
 * Generated class for the SubchaptersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subchapters',
  templateUrl: 'subchapters.html',
})
export class SubchaptersPage {
  
  data:any;
  title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService:AppService) {
  }

  ionViewDidLoad() {
    this.appService.getTodos().subscribe(todos => {
      this.data=todos;  
      if(todos){
          for(const i of todos){
            if(i.Number===this.navParams.data.chapterNumber){
              this.title=i.Chapter;
              this.data=i.List;
              //console.log(this.data);
            }
          }
          }  
    });
  }

  goToFormulary(list:any){
		this.navCtrl.push(FormularyPage, {listCategoryNumber:list.CategoryNumber});
	}

}