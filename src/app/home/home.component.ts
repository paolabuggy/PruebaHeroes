import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { Usuario } from '../models/Usuarios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ArrUsuarios:Usuario[]=[];
  public Uname:string="";
  public Usex:string="";
  public Uemail:string="";
  public Udate:string="";
  public User:Usuario={
    nombre:'',
    sexo:'',
    email:'',
    fechaNac:'',
    
    
  };
  constructor() { 

    this.ArrUsuarios=JSON.parse( localStorage.getItem("Usuarios") || '[]' );
    
  }

  ngOnInit(): void {
  }

  guardaUsuario(){

    
    this.Uname=(<HTMLInputElement>document.getElementById("nombref")).value;;
    this.Usex=(<HTMLInputElement>document.getElementById("sexof")).value;;
    this.Uemail=(<HTMLInputElement>document.getElementById("emailf")).value;;
    this.Udate=(<HTMLInputElement>document.getElementById("fechaf")).value;;
    if(this.Uname=="" || this.Usex=="" || this.Uemail=="" || this.Udate==""){
        alert("Datos incompletos");
    }
    else{
      
      this.User={
        nombre:this.Uname,
        sexo:this.Usex,
        email:this.Uemail,
        fechaNac:this.Udate,
       };
      //alert(this.User.nombre);

     
      this.ArrUsuarios.push(this.User);
    
      localStorage.setItem('Usuarios',JSON.stringify(this.ArrUsuarios));
    }
   
    //document.getElementById("sexof");
    //document.getElementById("emailf");
    //document.getElementById("fechaf");
 
  }

}
