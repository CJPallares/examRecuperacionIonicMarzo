import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Partido } from 'src/app/modelo/partido';

@Injectable()
export class ApiServiceJsonServerProvider {
    
    private URL="http://localhost:3000";

    constructor(public http: HttpClient){
    }

getPartidos(disputados:boolean, equipo:string):Promise<Partido[]> {
    let promise = new Promise<Partido[]>((resolve, reject) => {
        this.http.get(this.URL+"/partidos").toPromise()
            .then((data:any)=>{
                let partidos=new Array<Partido>();
                data.forEach(partidoJson => {
                    let partido=Partido.createFromJsonObject(partidoJson);
                    if(disputados==partido.disputado 
                        && (partido.equipoLocal===equipo || partido.equipoVisitante===equipo) )
                        partidos.push(partido);
                });
                resolve(partidos);
            })
            .catch( (error:Error)=>{
                reject(error.message);
            });
    });
    return promise;
}
    
}//end_class