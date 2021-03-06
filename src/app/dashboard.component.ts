import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero';
import { HeroService } from './service/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroesFromService => this.heroes = heroesFromService);
        this.heroes = this.heroes.slice(1,5);
    }

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }
}