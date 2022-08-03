import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.archived.component.html',
})
export class PersonArchivedComponent implements OnInit {
  constructor(private personService: PersonService) {}

  listPersonArchived: Person[] = [];

  ngOnInit(): void {
    this.findArchived();
  }

  findArchived(): void {
    this.personService
      .findArchived()
      .subscribe((respuesta) => (this.listPersonArchived = respuesta));
  }

  restore(person: Person): void {
    person.archived = false;
    this.personService.save(person).subscribe(() => {});
  }
}
