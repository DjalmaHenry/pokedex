import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-list/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from './services/pokemon.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonCardComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
