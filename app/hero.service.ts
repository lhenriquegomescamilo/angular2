import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {
	getHeroes(){
		return Promise.resolve(HEROES);
	}
	getHeroesSlowly(){
		return new Promise<Hero[]>(
			resolve => setTimeout(() => resolve(HEROES), 10000) // 2000 milis equal the 2 seconds
		);
	}
}