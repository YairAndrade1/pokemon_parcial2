import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PokemonListarComponent, PokemonDetailComponent],
  exports: [PokemonListarComponent, PokemonDetailComponent]
})
export class PokemonModule { }
