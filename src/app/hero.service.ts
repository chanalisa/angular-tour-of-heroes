import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(public messageService: MessageService) {}

  // of(HEROES) returns an Observable<Hero[]> that emits a single value (the array of mock heroes)
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: Fetched heroes");
    return of(HEROES);
  }

  getHero(id): Observable<Hero> {
    this.messageService.add(`HeroService: Fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
