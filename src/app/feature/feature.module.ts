import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FeatureRoutingModule } from './feature-routing.module';
import { PersonFormComponent } from './person/form/person.form.component';
import { UserFormComponent } from './user/form/user.form.component';
import { FormsModule } from '@angular/forms';
import { PersonArchivedComponent } from './person/person.archived/person.archived.component';
import { UserArchivedComponent } from './user/user.archived/user.archived.component';
import { UserListComponent } from './user/list/user-list.component';
import { PersonListComponent } from './person/list/person-list.component';
import { UserToolbarComponent } from './user/toolbar/user-toolbar.component';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { RolComboboxComponent } from './rol/rol-combobox.component';


@NgModule({
  declarations: [
    UserToolbarComponent,UserFormComponent,UserArchivedComponent,UserListComponent,PersonFormComponent, PersonArchivedComponent, PersonListComponent, PersonToolbarComponent, RolComboboxComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    MatIconModule
  ]
})
export class FeatureModule { }
