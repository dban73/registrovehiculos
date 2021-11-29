import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  baseURL = 'http://127.0.0.1:8040/'
  personas = [
    {id:'1', nombre:'nombre1', telefono:'48489',email:'nombre@main.com'}];
  nuevaPersona = new FormGroup({
    nombre:new FormControl(''),
    telefono:new FormControl(''),
    email:new FormControl('')
  });
    constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.recuperarDatos()
  }
  recuperarDatos(){
    this.http.get(this.baseURL+'personas')
    .subscribe(
      (response:any)=>{
        console.log('response received')
        console.log(response)
        this.personas = response.data;
      },
      (error)=>{
        console.error('Request failed with error')
        console.log(error)
      },
      ()=>{
        //console.error('Request completed')
        //this.loading=dfalse;
      }
    )
  }
  agregarPersona(){
    this.http.post<any>(this.baseURL+'personas',{
      nombre: this.nuevaPersona.value.nombre,
      telefono: this.nuevaPersona.value.telefono,
      email: this.nuevaPersona.value.email,
    }).subscribe(res =>{
      console.log("res")
      console.log(res)
      this.recuperarDatos();
    },
    err =>{
      console.log(err);
    }
    );
  }
}
