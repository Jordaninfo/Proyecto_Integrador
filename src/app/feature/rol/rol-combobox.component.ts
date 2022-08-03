import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rol } from './rol';
import { RolService } from './rol.service';

@Component({
  selector: 'app-rol-combobox',
  templateUrl: './rol-combobox.component.html',

})
export class RolComboboxComponent implements OnInit {

  constructor(
    private rolService: RolService
  ) { }
  roles: Rol[] = [];
  @Output() rolIdEmitter = new EventEmitter<number>();

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{
    this.rolService.findAll().subscribe(
      (response) => this.roles = response

    )
  }

  public onSelect(id:string){
    this.rolIdEmitter.emit(parseInt(id));
  }

}
