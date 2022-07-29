import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../_services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.sass']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: any;
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.warn(params.get('id'));
      this.pokemonService.getPokeCardById(params.get('id'))
        .subscribe(result => {          
          this.pokemon = result.data;
          console.warn('this.pokemon', this.pokemon);
        })   
    });
  }
}
