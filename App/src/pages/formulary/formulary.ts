import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AppService} from '../../services/app.service';

/**
 * Generated class for the FormularyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulary',
  templateUrl: 'formulary.html',
})
export class FormularyPage {
  data:any;
  title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService:AppService) {
    
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
          console.log(this.data);
        
    });
  }

  /*filterSubstances(param:any):void{
    this.appService.getTodos();

    let val : string = param;

    if(val.trim()!==''){
      this.data=this.data.filter((item)=>
      {
        return item.Title.toLowerCase().indexOf(val.toLowerCase())>-1;
      }
    )
    }
  }*/

}
