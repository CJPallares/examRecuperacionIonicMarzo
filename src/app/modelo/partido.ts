export class Partido {
  constructor(
    public id: string,
    public fecha: string,
    public equipoLocal: string,
    public equipoVisitante: string,
    public disputado: boolean,
    public golesLocal: number,
    public golesVisitante: number
  ) {}

  public static createFromJsonObject(jsonObject: any): Partido {
    let partido: Partido = new Partido(
      jsonObject['id'],
      jsonObject['fecha'],
      jsonObject['equipoLocal'],
      jsonObject['equipoVisitante'],
      jsonObject['disputado'],
      jsonObject['golesLocal'],
      jsonObject['golesVisitante']
    );
    return partido;
  }

  public getJsonObject(): any {
    let jsonObject: any = {};
    jsonObject['id'] = this.id;
    jsonObject['fecha'] = this.fecha;
    jsonObject['equipoLocal'] = this.equipoLocal;
    jsonObject['equipoVisitante'] = this.equipoVisitante;
    jsonObject['golesLocal'] = this.golesLocal;
    jsonObject['golesVisitante'] = this.golesVisitante;
    jsonObject['disputado'] = this.disputado;
    return jsonObject;
  }
} //end_class
