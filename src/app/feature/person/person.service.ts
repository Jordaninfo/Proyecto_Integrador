import { Injectable } from '@angular/core';
import {Person}   from '../person/person';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PersonService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  //(Save)
  private url = environment.API_URL + '/person';
  public save(person: Person): Observable<Person> {
    return this.http.post<Person>(this.url + '/save', person, this.httpOptions);
  }
  public findById(id: number): Observable<Person>{
    return this.http.get<Person>(this.url+"/findById/"+id, this.httpOptions);
  }
  //(FindAll)
  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url + '/findAll', this.httpOptions);
  }
  public findByName(term: string): Observable<Person[]>{
    return this.http.get<Person[]>(this.url+"/findByName/"+term, this.httpOptions)
  }

  //(FindArchive)
  public findArchived(): Observable<Person[]> {
    return this.http.get<Person[]>(
      this.url + '/findArchived',
      this.httpOptions
    );
  }
}

