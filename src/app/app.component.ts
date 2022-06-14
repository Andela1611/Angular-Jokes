import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JokesService } from './services/jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  favorites: any = [];
  joke: any = {};
  favoriteViewData: any = [];
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

  showFavorites() {
    this.favoriteViewData = JSON.parse(localStorage.getItem('favorites')!);
  }

  deleteJoke(id: string) {
    this.favoriteViewData = this.favoriteViewData.filter(
      (joke: any) => joke.id !== id
    );
    localStorage.setItem('favorites', JSON.stringify(this.favoriteViewData));
  }

  deleteLocalStorage() {
    localStorage.removeItem('favorites');
    window.location.reload();
  }
}
