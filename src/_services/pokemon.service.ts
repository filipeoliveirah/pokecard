import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_model/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  public pokemons: Pokemon[] = [];

  constructor( private httpClient: HttpClient ) {
    const endpointPokeCards = 'https://api.pokemontcg.io/v2/cards/?pageSize=20&orderBy=name';

    this.httpClient.get<any>(endpointPokeCards)
      .subscribe(result => this.pokemons = result.data);
  }
}
