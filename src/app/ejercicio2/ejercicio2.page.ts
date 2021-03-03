import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Partido } from '../modelo/partido';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {

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

  partidos:any=[
    {
      "id": 1,
      "equipoLocal": "VALENCIA",
      "equipoVisitante": "BETIS",
      "fecha": "2021-01-26",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 1
    },
    {
      "id": 2,
      "equipoLocal": "GETAFE",
      "equipoVisitante": "GETAFE",
      "fecha": "2021-04-22",
      "disputado": false,
      "golesLocal": 4,
      "golesVisitante": 3
    },
    {
      "id": 3,
      "equipoLocal": "ATLETIC DE BILBAO",
      "equipoVisitante": "HUESCA",
      "fecha": "2021-05-14",
      "disputado": false,
      "golesLocal": 1,
      "golesVisitante": 4
    },
    {
      "id": 4,
      "equipoLocal": "ALAVÉS",
      "equipoVisitante": "VALENCIA",
      "fecha": "2021-04-14",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 4
    },
    {
      "id": 5,
      "equipoLocal": "OSASUNA",
      "equipoVisitante": "SEVILLA",
      "fecha": "2021-04-21",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 4
    },
    {
      "id": 6,
      "equipoLocal": "CÁDIZ",
      "equipoVisitante": "VILLAREAL",
      "fecha": "2021-05-27",
      "disputado": true,
      "golesLocal": 3,
      "golesVisitante": 3
    },
    {
      "id": 7,
      "equipoLocal": "GRANADA",
      "equipoVisitante": "OSASUNA",
      "fecha": "2021-02-15",
      "disputado": false,
      "golesLocal": 0,
      "golesVisitante": 4
    },
    {
      "id": 8,
      "equipoLocal": "VALLADOLID",
      "equipoVisitante": "GETAFE",
      "fecha": "2021-05-21",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 2
    },
    {
      "id": 9,
      "equipoLocal": "CELTA DE VIGO",
      "equipoVisitante": "ATLÉTICO DE MADRID",
      "fecha": "2021-03-17",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 5
    },
    {
      "id": 10,
      "equipoLocal": "CÁDIZ",
      "equipoVisitante": "ATLETIC DE BILBAO",
      "fecha": "2021-05-13",
      "disputado": false,
      "golesLocal": 4,
      "golesVisitante": 2
    },
    {
      "id": 11,
      "equipoLocal": "SEVILLA",
      "equipoVisitante": "VALENCIA",
      "fecha": "2021-02-16",
      "disputado": true,
      "golesLocal": 3,
      "golesVisitante": 3
    },
    {
      "id": 12,
      "equipoLocal": "SEVILLA",
      "equipoVisitante": "SEVILLA",
      "fecha": "2021-04-28",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 5
    },
    {
      "id": 13,
      "equipoLocal": "EIBAR",
      "equipoVisitante": "GRANADA",
      "fecha": "2021-02-15",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 5
    },
    {
      "id": 14,
      "equipoLocal": "HUESCA",
      "equipoVisitante": "VALENCIA",
      "fecha": "2021-04-16",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 2
    },
    {
      "id": 15,
      "equipoLocal": "VALENCIA",
      "equipoVisitante": "VILLAREAL",
      "fecha": "2021-01-26",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 0
    },
    {
      "id": 16,
      "equipoLocal": "VALLADOLID",
      "equipoVisitante": "REAL SOCIEDAD",
      "fecha": "2021-02-04",
      "disputado": false,
      "golesLocal": 1,
      "golesVisitante": 1
    },
    {
      "id": 17,
      "equipoLocal": "HUESCA",
      "equipoVisitante": "VALLADOLID",
      "fecha": "2021-05-18",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 2
    },
    {
      "id": 18,
      "equipoLocal": "REAL MADRID",
      "equipoVisitante": "REAL SOCIEDAD",
      "fecha": "2021-02-08",
      "disputado": true,
      "golesLocal": 3,
      "golesVisitante": 5
    },
    {
      "id": 19,
      "equipoLocal": "OSASUNA",
      "equipoVisitante": "GRANADA",
      "fecha": "2021-05-22",
      "disputado": true,
      "golesLocal": 5,
      "golesVisitante": 0
    },
    {
      "id": 20,
      "equipoLocal": "OSASUNA",
      "equipoVisitante": "CÁDIZ",
      "fecha": "2021-02-08",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 3
    },
    {
      "id": 21,
      "equipoLocal": "ALAVÉS",
      "equipoVisitante": "REAL SOCIEDAD",
      "fecha": "2021-05-17",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 4
    },
    {
      "id": 22,
      "equipoLocal": "ATLETIC DE BILBAO",
      "equipoVisitante": "BARCELONA",
      "fecha": "2021-04-14",
      "disputado": false,
      "golesLocal": 5,
      "golesVisitante": 1
    },
    {
      "id": 23,
      "equipoLocal": "GRANADA",
      "equipoVisitante": "ATLÉTICO DE MADRID",
      "fecha": "2021-04-10",
      "disputado": false,
      "golesLocal": 4,
      "golesVisitante": 0
    },
    {
      "id": 24,
      "equipoLocal": "OSASUNA",
      "equipoVisitante": "ATLÉTICO DE MADRID",
      "fecha": "2021-02-02",
      "disputado": false,
      "golesLocal": 4,
      "golesVisitante": 2
    },
    {
      "id": 25,
      "equipoLocal": "VILLAREAL",
      "equipoVisitante": "OSASUNA",
      "fecha": "2021-03-06",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 5
    },
    {
      "id": 26,
      "equipoLocal": "ATLÉTICO DE MADRID",
      "equipoVisitante": "ELCHE",
      "fecha": "2021-05-15",
      "disputado": false,
      "golesLocal": 4,
      "golesVisitante": 4
    },
    {
      "id": 27,
      "equipoLocal": "BARCELONA",
      "equipoVisitante": "REAL MADRID",
      "fecha": "2021-03-12",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 0
    },
    {
      "id": 28,
      "equipoLocal": "CÁDIZ",
      "equipoVisitante": "ELCHE",
      "fecha": "2021-01-29",
      "disputado": true,
      "golesLocal": 5,
      "golesVisitante": 0
    },
    {
      "id": 29,
      "equipoLocal": "VALENCIA",
      "equipoVisitante": "REAL MADRID",
      "fecha": "2021-03-22",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 5
    },
    {
      "id": 30,
      "equipoLocal": "CELTA DE VIGO",
      "equipoVisitante": "CÁDIZ",
      "fecha": "2021-03-16",
      "disputado": false,
      "golesLocal": 5,
      "golesVisitante": 3
    },
    {
      "id": 31,
      "equipoLocal": "REAL SOCIEDAD",
      "equipoVisitante": "BARCELONA",
      "fecha": "2021-03-30",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 1
    },
    {
      "id": 32,
      "equipoLocal": "LEVANTE",
      "equipoVisitante": "EIBAR",
      "fecha": "2021-04-09",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 5
    },
    {
      "id": 33,
      "equipoLocal": "ATLÉTICO DE MADRID",
      "equipoVisitante": "ALAVÉS",
      "fecha": "2021-05-06",
      "disputado": false,
      "golesLocal": 0,
      "golesVisitante": 0
    },
    {
      "id": 34,
      "equipoLocal": "ATLETIC DE BILBAO",
      "equipoVisitante": "ALAVÉS",
      "fecha": "2021-03-12",
      "disputado": true,
      "golesLocal": 0,
      "golesVisitante": 3
    },
    {
      "id": 35,
      "equipoLocal": "OSASUNA",
      "equipoVisitante": "HUESCA",
      "fecha": "2021-03-05",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 3
    },
    {
      "id": 36,
      "equipoLocal": "HUESCA",
      "equipoVisitante": "GRANADA",
      "fecha": "2021-03-12",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 4
    },
    {
      "id": 37,
      "equipoLocal": "REAL SOCIEDAD",
      "equipoVisitante": "ATLÉTICO DE MADRID",
      "fecha": "2021-03-23",
      "disputado": false,
      "golesLocal": 4,
      "golesVisitante": 5
    },
    {
      "id": 38,
      "equipoLocal": "CELTA DE VIGO",
      "equipoVisitante": "CÁDIZ",
      "fecha": "2021-02-28",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 3
    },
    {
      "id": 39,
      "equipoLocal": "HUESCA",
      "equipoVisitante": "REAL SOCIEDAD",
      "fecha": "2021-02-22",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 0
    },
    {
      "id": 40,
      "equipoLocal": "VALENCIA",
      "equipoVisitante": "REAL MADRID",
      "fecha": "2021-03-19",
      "disputado": true,
      "golesLocal": 5,
      "golesVisitante": 1
    },
    {
      "id": 41,
      "equipoLocal": "VILLAREAL",
      "equipoVisitante": "VALENCIA",
      "fecha": "2021-04-16",
      "disputado": true,
      "golesLocal": 5,
      "golesVisitante": 5
    },
    {
      "id": 42,
      "equipoLocal": "CELTA DE VIGO",
      "equipoVisitante": "CÁDIZ",
      "fecha": "2021-05-02",
      "disputado": false,
      "golesLocal": 0,
      "golesVisitante": 1
    },
    {
      "id": 43,
      "equipoLocal": "EIBAR",
      "equipoVisitante": "VILLAREAL",
      "fecha": "2021-04-10",
      "disputado": true,
      "golesLocal": 0,
      "golesVisitante": 3
    },
    {
      "id": 44,
      "equipoLocal": "GRANADA",
      "equipoVisitante": "VALLADOLID",
      "fecha": "2021-04-07",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 0
    },
    {
      "id": 45,
      "equipoLocal": "SEVILLA",
      "equipoVisitante": "ELCHE",
      "fecha": "2021-05-01",
      "disputado": true,
      "golesLocal": 0,
      "golesVisitante": 1
    },
    {
      "id": 46,
      "equipoLocal": "VILLAREAL",
      "equipoVisitante": "ELCHE",
      "fecha": "2021-05-02",
      "disputado": false,
      "golesLocal": 0,
      "golesVisitante": 1
    },
    {
      "id": 47,
      "equipoLocal": "VILLAREAL",
      "equipoVisitante": "CELTA DE VIGO",
      "fecha": "2021-01-13",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 4
    },
    {
      "id": 48,
      "equipoLocal": "ATLETIC DE BILBAO",
      "equipoVisitante": "BARCELONA",
      "fecha": "2021-04-19",
      "disputado": false,
      "golesLocal": 0,
      "golesVisitante": 5
    },
    {
      "id": 49,
      "equipoLocal": "VILLAREAL",
      "equipoVisitante": "ATLETIC DE BILBAO",
      "fecha": "2021-01-07",
      "disputado": true,
      "golesLocal": 2,
      "golesVisitante": 3
    },
    {
      "id": 50,
      "equipoLocal": "REAL SOCIEDAD",
      "equipoVisitante": "VILLAREAL",
      "fecha": "2021-05-17",
      "disputado": true,
      "golesLocal": 5,
      "golesVisitante": 3
    },
    {
      "id": 51,
      "equipoLocal": "HUESCA",
      "equipoVisitante": "SEVILLA",
      "fecha": "2021-01-26",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 3
    },
    {
      "id": 52,
      "equipoLocal": "VALLADOLID",
      "equipoVisitante": "GETAFE",
      "fecha": "2021-02-26",
      "disputado": true,
      "golesLocal": 2,
      "golesVisitante": 2
    },
    {
      "id": 53,
      "equipoLocal": "CELTA DE VIGO",
      "equipoVisitante": "SEVILLA",
      "fecha": "2021-05-30",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 0
    },
    {
      "id": 54,
      "equipoLocal": "EIBAR",
      "equipoVisitante": "CÁDIZ",
      "fecha": "2021-01-29",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 4
    },
    {
      "id": 55,
      "equipoLocal": "OSASUNA",
      "equipoVisitante": "VALLADOLID",
      "fecha": "2021-05-16",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 4
    },
    {
      "id": 56,
      "equipoLocal": "ATLÉTICO DE MADRID",
      "equipoVisitante": "ELCHE",
      "fecha": "2021-01-01",
      "disputado": true,
      "golesLocal": 0,
      "golesVisitante": 3
    },
    {
      "id": 57,
      "equipoLocal": "BARCELONA",
      "equipoVisitante": "ATLETIC DE BILBAO",
      "fecha": "2021-02-08",
      "disputado": true,
      "golesLocal": 0,
      "golesVisitante": 1
    },
    {
      "id": 58,
      "equipoLocal": "REAL MADRID",
      "equipoVisitante": "LEVANTE",
      "fecha": "2021-05-25",
      "disputado": true,
      "golesLocal": 2,
      "golesVisitante": 1
    },
    {
      "id": 59,
      "equipoLocal": "BETIS",
      "equipoVisitante": "GETAFE",
      "fecha": "2021-01-05",
      "disputado": true,
      "golesLocal": 2,
      "golesVisitante": 0
    },
    {
      "id": 60,
      "equipoLocal": "ATLETIC DE BILBAO",
      "equipoVisitante": "CELTA DE VIGO",
      "fecha": "2021-04-11",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 0
    },
    {
      "id": 61,
      "equipoLocal": "HUESCA",
      "equipoVisitante": "VILLAREAL",
      "fecha": "2021-03-07",
      "disputado": true,
      "golesLocal": 3,
      "golesVisitante": 1
    },
    {
      "id": 62,
      "equipoLocal": "REAL SOCIEDAD",
      "equipoVisitante": "ALAVÉS",
      "fecha": "2021-05-18",
      "disputado": false,
      "golesLocal": 5,
      "golesVisitante": 0
    },
    {
      "id": 63,
      "equipoLocal": "REAL SOCIEDAD",
      "equipoVisitante": "EIBAR",
      "fecha": "2021-04-15",
      "disputado": false,
      "golesLocal": 5,
      "golesVisitante": 5
    },
    {
      "id": 64,
      "equipoLocal": "REAL MADRID",
      "equipoVisitante": "ATLETIC DE BILBAO",
      "fecha": "2021-02-21",
      "disputado": false,
      "golesLocal": 5,
      "golesVisitante": 3
    },
    {
      "id": 65,
      "equipoLocal": "VILLAREAL",
      "equipoVisitante": "OSASUNA",
      "fecha": "2021-05-12",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 0
    },
    {
      "id": 66,
      "equipoLocal": "ALAVÉS",
      "equipoVisitante": "GRANADA",
      "fecha": "2021-04-06",
      "disputado": true,
      "golesLocal": 3,
      "golesVisitante": 5
    },
    {
      "id": 67,
      "equipoLocal": "OSASUNA",
      "equipoVisitante": "GETAFE",
      "fecha": "2021-01-24",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 3
    },
    {
      "id": 68,
      "equipoLocal": "BETIS",
      "equipoVisitante": "LEVANTE",
      "fecha": "2021-03-27",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 3
    },
    {
      "id": 69,
      "equipoLocal": "ATLÉTICO DE MADRID",
      "equipoVisitante": "CELTA DE VIGO",
      "fecha": "2021-02-18",
      "disputado": true,
      "golesLocal": 0,
      "golesVisitante": 2
    },
    {
      "id": 70,
      "equipoLocal": "GRANADA",
      "equipoVisitante": "VILLAREAL",
      "fecha": "2021-01-02",
      "disputado": false,
      "golesLocal": 5,
      "golesVisitante": 1
    },
    {
      "id": 71,
      "equipoLocal": "VILLAREAL",
      "equipoVisitante": "ATLETIC DE BILBAO",
      "fecha": "2021-04-26",
      "disputado": true,
      "golesLocal": 0,
      "golesVisitante": 0
    },
    {
      "id": 72,
      "equipoLocal": "GRANADA",
      "equipoVisitante": "CÁDIZ",
      "fecha": "2021-01-07",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 2
    },
    {
      "id": 73,
      "equipoLocal": "ATLÉTICO DE MADRID",
      "equipoVisitante": "BARCELONA",
      "fecha": "2021-04-08",
      "disputado": false,
      "golesLocal": 1,
      "golesVisitante": 5
    },
    {
      "id": 74,
      "equipoLocal": "LEVANTE",
      "equipoVisitante": "BETIS",
      "fecha": "2021-03-09",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 3
    },
    {
      "id": 75,
      "equipoLocal": "SEVILLA",
      "equipoVisitante": "GETAFE",
      "fecha": "2021-03-04",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 0
    },
    {
      "id": 76,
      "equipoLocal": "SEVILLA",
      "equipoVisitante": "OSASUNA",
      "fecha": "2021-03-25",
      "disputado": true,
      "golesLocal": 2,
      "golesVisitante": 1
    },
    {
      "id": 77,
      "equipoLocal": "GRANADA",
      "equipoVisitante": "LEVANTE",
      "fecha": "2021-04-12",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 1
    },
    {
      "id": 78,
      "equipoLocal": "HUESCA",
      "equipoVisitante": "REAL MADRID",
      "fecha": "2021-05-08",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 0
    },
    {
      "id": 79,
      "equipoLocal": "ELCHE",
      "equipoVisitante": "ALAVÉS",
      "fecha": "2021-05-08",
      "disputado": false,
      "golesLocal": 4,
      "golesVisitante": 3
    },
    {
      "id": 80,
      "equipoLocal": "REAL MADRID",
      "equipoVisitante": "REAL MADRID",
      "fecha": "2021-04-03",
      "disputado": true,
      "golesLocal": 0,
      "golesVisitante": 4
    },
    {
      "id": 81,
      "equipoLocal": "LEVANTE",
      "equipoVisitante": "OSASUNA",
      "fecha": "2021-01-07",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 4
    },
    {
      "id": 82,
      "equipoLocal": "BARCELONA",
      "equipoVisitante": "EIBAR",
      "fecha": "2021-03-07",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 0
    },
    {
      "id": 83,
      "equipoLocal": "BETIS",
      "equipoVisitante": "VALLADOLID",
      "fecha": "2021-02-12",
      "disputado": false,
      "golesLocal": 4,
      "golesVisitante": 2
    },
    {
      "id": 84,
      "equipoLocal": "OSASUNA",
      "equipoVisitante": "ELCHE",
      "fecha": "2021-05-08",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 2
    },
    {
      "id": 85,
      "equipoLocal": "SEVILLA",
      "equipoVisitante": "ELCHE",
      "fecha": "2021-04-04",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 5
    },
    {
      "id": 86,
      "equipoLocal": "CELTA DE VIGO",
      "equipoVisitante": "VALLADOLID",
      "fecha": "2021-05-04",
      "disputado": true,
      "golesLocal": 3,
      "golesVisitante": 4
    },
    {
      "id": 87,
      "equipoLocal": "VALENCIA",
      "equipoVisitante": "VALLADOLID",
      "fecha": "2021-05-05",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 5
    },
    {
      "id": 88,
      "equipoLocal": "GETAFE",
      "equipoVisitante": "HUESCA",
      "fecha": "2021-02-28",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 5
    },
    {
      "id": 89,
      "equipoLocal": "OSASUNA",
      "equipoVisitante": "REAL MADRID",
      "fecha": "2021-05-08",
      "disputado": false,
      "golesLocal": 4,
      "golesVisitante": 4
    },
    {
      "id": 90,
      "equipoLocal": "VILLAREAL",
      "equipoVisitante": "BARCELONA",
      "fecha": "2021-01-20",
      "disputado": true,
      "golesLocal": 5,
      "golesVisitante": 0
    },
    {
      "id": 91,
      "equipoLocal": "VALLADOLID",
      "equipoVisitante": "ATLÉTICO DE MADRID",
      "fecha": "2021-04-25",
      "disputado": true,
      "golesLocal": 1,
      "golesVisitante": 0
    },
    {
      "id": 92,
      "equipoLocal": "OSASUNA",
      "equipoVisitante": "VALLADOLID",
      "fecha": "2021-03-09",
      "disputado": true,
      "golesLocal": 0,
      "golesVisitante": 1
    },
    {
      "id": 93,
      "equipoLocal": "ELCHE",
      "equipoVisitante": "REAL MADRID",
      "fecha": "2021-04-07",
      "disputado": false,
      "golesLocal": 0,
      "golesVisitante": 4
    },
    {
      "id": 94,
      "equipoLocal": "BETIS",
      "equipoVisitante": "EIBAR",
      "fecha": "2021-03-27",
      "disputado": false,
      "golesLocal": 4,
      "golesVisitante": 5
    },
    {
      "id": 95,
      "equipoLocal": "ATLETIC DE BILBAO",
      "equipoVisitante": "LEVANTE",
      "fecha": "2021-03-10",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 1
    },
    {
      "id": 96,
      "equipoLocal": "SEVILLA",
      "equipoVisitante": "ATLÉTICO DE MADRID",
      "fecha": "2021-05-18",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 1
    },
    {
      "id": 97,
      "equipoLocal": "ELCHE",
      "equipoVisitante": "BETIS",
      "fecha": "2021-04-16",
      "disputado": false,
      "golesLocal": 2,
      "golesVisitante": 0
    },
    {
      "id": 98,
      "equipoLocal": "EIBAR",
      "equipoVisitante": "VALLADOLID",
      "fecha": "2021-04-22",
      "disputado": true,
      "golesLocal": 4,
      "golesVisitante": 1
    },
    {
      "id": 99,
      "equipoLocal": "LEVANTE",
      "equipoVisitante": "REAL SOCIEDAD",
      "fecha": "2021-02-13",
      "disputado": false,
      "golesLocal": 5,
      "golesVisitante": 5
    },
    {
      "id": 100,
      "equipoLocal": "REAL SOCIEDAD",
      "equipoVisitante": "BARCELONA",
      "fecha": "2021-02-10",
      "disputado": false,
      "golesLocal": 3,
      "golesVisitante": 3
    }
  ];
  
  equipo:string='';

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert(partido:Partido) {
    const alert = await this.alertController.create({
      header: partido.equipoLocal + "-" + partido.equipoVisitante,
      message:  "Fecha: " + partido.fecha + "<br>"
                + "Disputado: " + partido.disputado + "<br>"
                + "Resultado: " + partido.golesLocal + " - " + partido.golesVisitante,
      buttons: ['OK']
    });

    await alert.present();
  }

}
