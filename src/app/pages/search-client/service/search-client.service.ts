import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { map, catchError } from 'rxjs/operators';
import { ClientModel } from '../../models/client.model';



@Injectable({
  providedIn: 'root'
})
export class SearchClientService {

  private ip = 'http://localhost:8090';
  private client: ClientModel | null = null;
  constructor(private http: HttpClient){}


  /**
   * Servicio encargado de comunicarse con el API y búscar un lcinete con base a su tipo y número de identificación.
   * @param documentType Tipo de documento C | P
   * @param documentNumber Número de documento
   * @returns Cliente
   */
  getClientByDocumentTypeAndDocumentNumber( documentType: string, documentNumber: number ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
    return this.http.get(`${this.ip}/getClient/documentType/${documentType}/documentNumber/${documentNumber}`, {headers})
            .pipe( catchError( error => of( {...error} ) ) );
  }

  /**
   * Metodo encargado de setear en el servicio el cliente.
   * @param client Cliente obtenido desde el api
   */
  setClient( client: ClientModel ): void {
    this.client = client;
  }

  /**
   * Metodo encargado de retornar el cliente en memoria.
   */
  getClient(): ClientModel | null  {
    return this.client;
  }


}
