import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero';
import { HeroService } from './service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit{
  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(
    private heroService: HeroService,
    private router: Router
  ){}
 
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero){
  	this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}