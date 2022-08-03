import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  //(Save)
  private url = environment.API_URL + '/rol';
  public findById(id: number): Observable<Rol>{
    return this.http.get<Rol>(this.url+"/findById/"+id, this.httpOptions);
  }
  //(FindAll)
  public findAll(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.url + '/findAll', this.httpOptions);
  }




}
