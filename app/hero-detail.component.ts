//import { Component, Input } from "@angular/core";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Hero } from './hero' 
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
selector: "my-hero-detail",
templateUrl: "app/hero-detail.component.html",
styleUrls:["app/hero-detail.component.css"]
 })

export class HeroDetailComponent implements OnInit, OnDestroy{
 //   @Input() hero: Hero;
 hero: Hero;
 sub: any;

constructor(
    private heroService : HeroService,
    private route: ActivatedRoute
    ){}

ngOnInit(){
    this.sub = this.route.params.subscribe(params =>{
        let id =+ params['id'];
        this.heroService.getHeroe(id)
        .then(hero => this.hero = hero);
    } )
}

ngOnDestroy(){
    this.sub.unsubscribe();
}

goBack() {
  window.history.back();
}

}
