import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Partido } from 'src/app/modelo/partido';

@Injectable()
export class ApiServiceProviderFirebase {

    
    constructor(private angularFirestore: AngularFirestore){
    }

    insertarPartido(datosNuevoPartido:Partido):Promise<any>{
      let partidoJson=datosNuevoPartido;
      delete partidoJson.id;
      return this.angularFirestore.collection("partidos").add(partidoJson);
    }//end_insertarAlumno

    getPartidoPorFechaEquipoLocalEquipoVisitante(fecha,equipoLocal, equipoVisitante):Promise<Partido>{
      var promise:Promise<Partido> = new Promise<Partido>( (resolve, reject)=>{
        const partidosRef = this.angularFirestore.collection('partidos').ref;
        partidosRef.where('fecha','==',fecha)
              .where('equipoLocal','==',equipoLocal)
              .where('equipoVisitante','==',equipoVisitante)
              .get()
        .then( (response)=>{
          if(response.empty)
            resolve(null);
          response.forEach( (data)=>{
            var partido:Partido;
            partido=Partido.createFromJsonObject(data.data());
            partido.id=data.id;
            resolve(partido);
          })
        })
        .catch( (error)=>{
           reject(error);
        });
      });
      return promise;
    }

}//end_class
