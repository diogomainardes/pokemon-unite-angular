import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { pipe, tap } from 'rxjs';
import { LoadingService } from '../core/services/loading.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-listagem',
  templateUrl: './pokemon-listagem.component.html',
  styleUrls: ['./pokemon-listagem.component.scss'],
})
export class PokemonListagemComponent {
  pokemons: Array<any> = [];
  filter: FormGroup = this.fb.group({
    name: [''],
  });

  constructor(
    private pokemonService: PokemonService,
    private fb: FormBuilder,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getList();
  }

  getList(filter?: any) {
    this.loadingService.showLoading();
    this.pokemonService
      .getList(filter?.value)
      .pipe(
        tap(() => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe((data) => (this.pokemons = data));
  }

  onFilterSubmit() {
    if (this.filter.invalid) {
      return;
    }
    this.getList(this.filter);
  }
}
