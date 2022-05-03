import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbCardModule,
    NbIconModule,
    NbEvaIconsModule,
  ],
  declarations: [PagesComponent, HomeComponent, PokedexComponent, PokemonComponent]
})
export class PagesModule { }
