import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {
  pokemons : Array<PokemonDetailDto> = [];
  selectedPokemon!: PokemonDetailDto;
  selected:boolean=false;

  getPokemons(): void{
    this.pokemons = this.service.getPokemons();
  }
  constructor(private service: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  onSelected( pokemon: PokemonDetailDto){
    this.selected = true;
    this.selectedPokemon = pokemon;

  }
  

}
