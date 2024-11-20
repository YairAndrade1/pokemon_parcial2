import { Component, Input, input, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemonId!: number;
  @Input() pokemonDetalle!: PokemonDetailDto;
  constructor( private service: PokemonService, private route: ActivatedRoute) { }

  setPokemonId(id: number){
    this.pokemonId = id;
  }

  getPokemonId(){
    return this.pokemonId;
  }

  getPokemonDetalle(){
    return this.pokemonDetalle;
  }
  ngOnInit() {
    if(this.pokemonDetalle == undefined ){
      this.setPokemonId(Number(this.route.snapshot.paramMap.get('id')));
      if(this.pokemonId)
        this.getPokemonDetalle();
    }
  }
}
