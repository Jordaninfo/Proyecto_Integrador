import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.archived.component.html',
})
export class UserArchivedComponent implements OnInit {
  constructor(private userService: UserService) {}

  listUserArchived: User[] = [];

  ngOnInit(): void {
    this.findArchived();
  }

  findArchived(): void {
    this.userService
      .findArchived()
      .subscribe((respuesta) => (this.listUserArchived = respuesta));
  }

  restore(user: User): void {
    user.archived = false;
    this.userService.save(user).subscribe(() => {});
  }
}
