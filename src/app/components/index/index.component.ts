import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  favorites: any = [];
  joke: any = {};
  constructor(private jokesService: JokesService) {}

  ngOnInit() {
    this.jokesService.getRandomJoke().subscribe((joke) => {
      this.joke = joke;
    });
    if (localStorage.getItem('favorites') === null) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
  }
  newJoke() {
    this.jokesService.getRandomJoke().subscribe((joke) => {
      this.joke = joke;
    });
  }
  exists(id: string) {
    return this.favorites.filter((f: any) => f.id === id).length > 0;
  }
  saveJoke() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') as string);
    if (!this.exists(this.joke.id) || []) {
      this.favorites.push(this.joke);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.newJoke();
    }
  }
}
