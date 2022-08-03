import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.form.component.html',
})
export class UserFormComponent implements OnInit {
  constructor(private userService: UserService) {}

  currentEntity: User = new User(
    0,
    '',
    '',
    '',
    new Date(),
    new Date(),
    true,
    false,
    0,
    0,

  );
  listUser: User[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  save(user: User): void {
    if (user.created == null) {
      user.created = new Date();
    }
    user.updated = new Date();
    this.userService.save(user).subscribe(() => {
      this.currentEntity = {
        userId: 0,
        username: '',
        email: '',       
        password: '',
        created: new Date(),
        updated: new Date(),
        enabled: true,
        archived: false,
        personId:0,
        rolId:0
      };
    });
  }

  findAll(): void {
    this.userService
      .findAll()
      .subscribe((respuesta) => (this.listUser = respuesta));
  }
  findById(userId: number): void {
    this.userService.findById(userId).subscribe((respuesta) => {
      this.currentEntity = respuesta;
    }
    );
  }

  seleccionarUser(user: User): void {
    this.currentEntity = user;
  }

  archivar(user: User): void {
    user.archived = true;
    this.userService.save(user).subscribe(() => {
      this.currentEntity = {
        userId: 0,
        username: '',        
        email: '',       
        password: '',
        created: new Date(),
        updated: new Date(),
        enabled: true,
        archived: false,
        personId:0,
        rolId:0
      };
    });
  }

  refresh(): void {
    window.location.reload();
  }

  cancel(): void {
    this.currentEntity = {
        userId: 0,
        username: '',        
        email: '',       
        password: '',
        created: new Date(),
        updated: new Date(),
        enabled: true,
        archived: false,
        personId:0,
        rolId:0

    };
  }
}
