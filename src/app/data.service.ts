import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap,  flatMap, delay, concatMap, tap, mergeMap, take,  throttleTime, scan } from 'rxjs/operators';
import { interval, timer} from 'rxjs';
@Injectable()
export class DataService {

  pokemonas = [];
  pokeUrl = "https://pokeapi.co/api/v2";
  pokeImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
  constructor(private http: HttpClient) { }

  getPokemon(offset = 0){
      return this.http.get(`${this.pokeUrl}/pokemon?offset=${offset}&limit=50`)
      .pipe(
        map(res => { return res['results']}),
        switchMap( pokemons => pokemons)
        /*map( 
            pokemon => { return pokemon.map((poke,index) =>{
            poke.Image = this.getPokeImage(index+1);
            poke.Index = index + 1;
            return poke;
        })
        })*/
      )
  }


  getPokeImage(index){
     return `${this.pokeImage}/${index}.png`;
  }

}