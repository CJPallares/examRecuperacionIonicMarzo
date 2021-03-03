import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Partido } from '../modelo/partido';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  partido:Partido;

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute ) { 

  }
 
  ngOnInit() {
    
  }

  ionViewWillEnter(){ 
    this.partido=null;
    this.activatedRoute.queryParams.subscribe(params => {
        this.partido = JSON.parse(params['partido']);
        console.log(this.partido);
    });
  }

}//end_class

