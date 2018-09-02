import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AppService} from '../../services/app.service';

/**
 * Generated class for the SubstancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-substance',
  templateUrl: 'substance.html',
})
export class SubstancePage {
  data:any;
  title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public appService:AppService) {
  }

  ionViewDidLoad() {
    this.appService.getTodos().subscribe(todos => {
      this.data=todos;  
      
          for(const i of todos){
            for(const j of i.List){
              if(j.CategoryNumber===this.navParams.data.listCategoryNumber){
              this.title=j.CategoryName;
              this.data=j.Subcategories;
            }
            }
            
          }
        
    });
  }

}
