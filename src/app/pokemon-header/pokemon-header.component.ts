import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from "@angular/router"

export class AppModule { }

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.sass']
})
export class PokemonHeaderComponent {

  searchTerm: any;

  name = new FormControl('');

  constructor(private router: Router) { }

  pokemonSearch(event): void {
    event.preventDefault();
    this.router.navigate(['/search', this.name.value]);
  }
}
