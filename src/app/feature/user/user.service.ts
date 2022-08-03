import { Injectable } from '@angular/core';
import {User}   from '../user/user';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class  UserService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  //(Save)
  private url = environment.API_URL + '/user';
  public save(user:   User): Observable<  User> {
    return this.http.post<  User>(this.url + '/save', user, this.httpOptions);
  }
  public findById(id: number): Observable<  User>{
    return this.http.get< User>(this.url+"/findById/"+id, this.httpOptions);
  }
  //(FindAll)
  public findAll(): Observable< User[]> {
    return this.http.get< User[]>(this.url + '/findAll', this.httpOptions);
  }
  public findByName(term: string): Observable<  User[]>{
    return this.http.get< User[]>(this.url+"/findByName/"+term, this.httpOptions)
  }

  //(FindArchive)
  public findArchived(): Observable<  User[]> {
    return this.http.get< User[]>(
      this.url + '/findArchived',
      this.httpOptions
    );
  }
}

