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
// La diferencia entre ionViewWillEnter y ionViewDidEnter es cuando son ejecutadas. El primero se ejecuta justo después de ngOnInit 
// pero antes de que la transición de la pagina inicie, y este último directamente después de que termina la transición.
  ionViewWillEnter(){ 
    this.partido=null;
    this.activatedRoute.queryParams.subscribe(params => {
        this.partido = JSON.parse(params['partido']); //coge los datos que le manda la pag ejercicio1
        console.log(this.partido);
    });
  }

}//end_class

