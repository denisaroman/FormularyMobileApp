import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AppService} from '../../services/app.service';

/**
 * Generated class for the SubstancesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-substances',
  templateUrl: 'substances.html',
})
export class SubstancesPage {
  data:any;
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService:AppService) {
  }

  ionViewDidLoad() {
 
    this.appService.getTodos().subscribe(todos => {
			
			this.data=todos;
      this.items=[];
      for(const i of todos){
        for(const j of i.List){
          for(const k of j.Subcategories){
            for(const l of k.MedicinesGroup){
              for(const m of l.Content){
               this.items.push({
                 Substance: m.Substance,
                 Details:m.Details
               })
              }
            }
          }
          
        }
        }
        this.data=this.items;
        
    });
    
  }

  

  filterSubstances(param:any):void{
    this.appService.getTodos();

    let val : string = param;

    if(val.trim()!==''){
      this.data = this.data.filter((item) =>
         {
           console.log(item.Substance);
           return item.Substance.toLowerCase().indexOf(val.toLowerCase()) > -1;
         })  
    }else{
      return this.data;
    }
  }

}
/*export interface Data{
	Number: String,
        Chapter: String,
        List: [
          {
            CategoryNumber: String,
            CategoryName: String,
            Subcategories:[
              {
                Title: String,
                MedicinesGroup:[
                  {
                    Name: String,
                    Content:[
                      {
                        Substance: String,
                        Details:[
                          {
                            Brand : String,
                            Note : String,
                            Link : String,
                            Color: String
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
            
          }  
        ]

}*/
