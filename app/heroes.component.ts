import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from "./hero.service";
import { Router } from "@angular/router";


@Component ({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    styleUrls: [`app/heroes.component.css`],
    templateUrl:"app/heroes.component.html"
})

export class HeroesComponent implements OnInit{
    title = 'Tour of Heroes';
    heroes : Hero[];
    selectedHero:  Hero;


ngOnInit(){
    this.getHeroes();
}

getHeroes() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
    constructor(
      private router: Router,
      private heroService: HeroService
      ){ 
               
    }

    onSelect(hero: Hero){
        console.log(hero.name);
        this.selectedHero=  hero;
    }    

    gotoDetail(){
      console.log("I am here at gotoDetail");         
      this.router.navigate(['detail', this.selectedHero.id]);
    }
}

