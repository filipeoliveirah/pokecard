import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_model/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  public pokemons: Pokemon[] = [];

  endpointPokeCards = 'https://api.pokemontcg.io/v2/';

  constructor( private httpClient: HttpClient ) {

    this.httpClient.get<any>(this.endpointPokeCards + 'cards/' + '?pageSize=20&orderBy=name')
      .subscribe(result => this.pokemons = result.data);
  }
  getPokeCardByName(pokeName){
    return this.httpClient.get<any>(this.endpointPokeCards + 'cards/' + '?q=name:' + pokeName);
  }
  getPokeCardById(pokeId){
    return this.httpClient.get<any>(this.endpointPokeCards + 'cards/' + pokeId);
  }
}