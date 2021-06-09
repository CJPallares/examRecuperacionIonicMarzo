import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Partido } from '../modelo/partido';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.page.html',
  styleUrls: ['./ejercicio1.page.scss'],
})
export class Ejercicio1Page implements OnInit {

  formulario: FormGroup;
  grupo: FormGroup;
  equipos:any=[
    {
      "id": 1,
      "equipo": "REAL MADRID"
    },
    {
      "id": 2,
      "equipo": "BARCELONA"
    },
    {
      "id": 3,
      "equipo": "SEVILLA"
    },
    {
      "id": 4,
      "equipo": "BETIS"
    },
    {
      "id": 5,
      "equipo": "ATLÉTICO DE MADRID"
    },
    {
      "id": 6,
      "equipo": "VALENCIA"
    },
    {
      "id": 7,
      "equipo": "VILLAREAL"
    },
    {
      "id": 8,
      "equipo": "ATLETIC DE BILBAO"
    },
    {
      "id": 9,
      "equipo": "REAL SOCIEDAD"
    },
    {
      "id": 10,
      "equipo": "CELTA DE VIGO"
    },
    {
      "id": 11,
      "equipo": "HUESCA"
    },
    {
      "id": 12,
      "equipo": "CÁDIZ"
    },
    {
      "id": 13,
      "equipo": "ALAVÉS"
    },
    {
      "id": 14,
      "equipo": "EIBAR"
    },
    {
      "id": 15,
      "equipo": "LEVANTE"
    },
    {
      "id": 16,
      "equipo": "GRANADA"
    },
    {
      "id": 17,
      "equipo": "VALLADOLID"
    },
    {
      "id": 18,
      "equipo": "GETAFE"
    },
    {
      "id": 19,
      "equipo": "ELCHE"
    },
    {
      "id": 20,
      "equipo": "OSASUNA"
    }
  ];

  constructor(public formBuilder: FormBuilder,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      fecha: new FormControl('', Validators.compose([
        Validators.required
      ])),
      equipoLocal: new FormControl('', Validators.compose([
        Validators.required
      ])),
      equipoVisitante: new FormControl('', Validators.compose([
        Validators.required
      ])),
      disputado: new FormControl(false, Validators.compose([
        Validators.required
      ])),
      golesLocal: new FormControl(0, Validators.compose([
        Validators.required,
        Validators.min(0)
      ])),
      golesVisitante: new FormControl(0, Validators.compose([
        Validators.required,
        Validators.min(0)
      ]))
    }, (formGroup: FormGroup) => {
      return this.validarGrupo(formGroup);
    });
  
    this.formulario = this.formBuilder.group({
      grupo: this.grupo
    });
  }

  validarGrupo(fg: FormGroup){
    var equipoLocal=fg.controls['equipoLocal'].value;
    var equipoVisitante=fg.controls['equipoVisitante'].value;

    if(equipoLocal===equipoVisitante)
      return({validarGrupo:true});  //no se valida

    return null;  //se valida
  }

 
  onChangeDisputado($event){
    this.formulario.get('grupo').get('golesLocal').setValue(0);
    this.formulario.get('grupo').get('golesVisitante').setValue(0);
  }

  onSubmit(values){
    var partido=new Partido("-1",
                              values['grupo']['fecha'],
                              values['grupo']['equipoLocal'],
                              values['grupo']['equipoVisitante'],
                              values['grupo']['disputado'],
                              values['grupo']['golesLocal'],
                              values['grupo']['golesVisitante']
                              );
    let navigationExtras: NavigationExtras = {
      queryParams: {
          partido: JSON.stringify(partido)
      }
    };
    this.navCtrl.navigateBack('/home', navigationExtras); 
  }

}//end_class
