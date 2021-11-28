import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  baseURL = 'http://127.0.0.1:8040/'
  personas = [
    {id:'1', nombre:'nombre1', telefono:'48489',email:'nombre@main.com'},
    {id:'2', nombre:'name2', telefono:'85648489',email:'nombre@main.com'},
    {id:'3', nombre:'nick3', telefono:'248489',email:'nombre@main.com'}
  ];
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
}
