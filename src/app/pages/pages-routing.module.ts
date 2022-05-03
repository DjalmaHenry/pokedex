import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { PokedexComponent } from "./pokedex/pokedex.component";
import { PokemonComponent } from "./pokemon/pokemon.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'pokedex',
      component: PokedexComponent,
    },
    {
      path: 'pokemon/:name',
      component: PokemonComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
