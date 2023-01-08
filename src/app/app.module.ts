import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonListagemComponent } from './pokemon-listagem/pokemon-listagem.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { LoadingComponent } from './core/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListagemComponent,
    PokemonDetailsComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'details/:uri', component: PokemonDetailsComponent },
      { path: '', component: PokemonListagemComponent },
    ]),
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
