import { Component, OnInit} from '@angular/core';
import { Pokemon } from '../../_model/Pokemon';
import { PokemonService } from '../../_services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.sass']
})

export class PokemonSearchComponent implements OnInit{

  public pokemonsData: Pokemon[] = [];

  constructor(public pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pokemonService.getPokeCardByName(params.get('name'))
        .subscribe(result => {          
          this.pokemonsData = result.data;
        })   
    });
  }
}