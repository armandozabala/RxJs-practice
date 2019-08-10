import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import {  DataService } from './data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'PokeDex with rxjs';

  pokemons:any = [];

  constructor(public dataService: DataService){}

  public ngOnInit(){
    const ele = document.getElementById('ele');

    const click = fromEvent(ele,'mousemove');

   /* click.subscribe( (e: MouseEvent) => {
        console.log(e);
    });*/

    this.Pokemons();
  }

  public Pokemons(){
   this.dataService.getPokemon().subscribe( res => {
        
        setInterval(()=>{
          console.log(res);
       },5000);
          //this.pokemons = res;
       
       
    });

 
  }


  
}
