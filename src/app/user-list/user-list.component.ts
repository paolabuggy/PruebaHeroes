import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuarios';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public ArrUsuarios:Usuario[]=[];
  constructor() {

    this.ArrUsuarios=JSON.parse( localStorage.getItem("Usuarios") || '[]' );
   }

  ngOnInit(): void {
  }

}
