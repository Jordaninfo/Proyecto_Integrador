import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.form.component.html',
})
export class PersonFormComponent implements OnInit {
  constructor(private personService: PersonService) {}

  currentEntity: Person = new Person(
    0,
    '',
    '',
    '',
    '',
    '',
    new Date(),
    new Date(),
    true,
    false,
    0,

  );
  listPerson: Person[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  save(person: Person): void {
    if (person.created == null) {
      person.created = new Date();
    }
    person.updated = new Date();
    this.personService.save(person).subscribe(() => {
      this.currentEntity = {
        personId: 0,
        dni: '',
        name: '',
        email: '',
        username: '',
        password: '',
        created: new Date(),
        updated: new Date(),
        enabled: true,
        archived: false,
        rolId:0
      };
    });
  }

  findAll(): void {
    this.personService
      .findAll()
      .subscribe((respuesta) => (this.listPerson = respuesta));
  }
  findById(personId: number): void {
    this.personService.findById(personId).subscribe((respuesta) => {
      this.currentEntity = respuesta;
    }
    );
  }

  seleccionarPerson(person: Person): void {
    this.currentEntity = person;
  }

  archivar(person: Person): void {
    person.archived = true;
    this.personService.save(person).subscribe(() => {
      this.currentEntity = {
        personId: 0,
        dni: '',
        name: '',
        email: '',
        username: '',
        password: '',
        created: new Date(),
        updated: new Date(),
        enabled: true,
        archived: false,
        rolId:0
      };
    });
  }

  refresh(): void {
    window.location.reload();
  }

  cancel(): void {
    this.currentEntity = {
      personId: 0,
      dni: '',
      name: '',
      email: '',
      username: '',
      password: '',
      created: new Date(),
      updated: new Date(),
      enabled: true,
      archived: false,
      rolId:0

    };
  }
}
