import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { LoadingService } from '../core/services/loading.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  uri: string = '';

  details: any = {};

  labelSkills: any = {
    attack: 'Ataque',
    resistance: 'Resistência',
    mobility: 'Mobilidade',
    punctuation: 'Pontuação',
    support: 'Apoio',
  };

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.loadingService.showLoading();
    this.router.params.subscribe((params) => (this.uri = params['uri']));
    this.getPokemonDetail(this.uri);
  }

  getPokemonDetail(uri: string) {
    this.pokemonService
      .getDetails(uri)
      .pipe(
        tap((value) => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe((data) => {
        this.details = data;
        this.details.skills = Object.keys(this.details.skills).map((key) => {
          return {
            key,
            value: this.details.skills[key],
          };
        });
      });
  }
}
