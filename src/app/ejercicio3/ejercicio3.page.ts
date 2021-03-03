import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceJsonServerProvider } from 'src/providers/api-service-jsonserver';
import { Partido } from '../modelo/partido';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {

  partidos:Partido[]=new Array<Partido>();

  constructor(public apiServiceJsonServer: ApiServiceJsonServerProvider,
              public alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert(disputados:boolean) {

    var mensaje:string;
    if(disputados)
      mensaje="disputados"
    else
      mensaje="no disputados";

    const alert = await this.alertController.create({
      header: 'Partidos '+mensaje,
      inputs: [
        {
          name: 'equipo',
          type: 'text',
          placeholder: 'equipo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            var equipo=data['equipo'];
            this.apiServiceJsonServer.getPartidos(disputados,equipo)
              .then( (partidos:Partido[])=>{
                this.partidos=partidos;
              })
              .catch((error:string)=>{
                console.log(error);
              });
          }
        }
      ]
    });

    await alert.present();
  }

}
