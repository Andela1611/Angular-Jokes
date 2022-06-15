import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: any = [];
  joke: any = {};
  favoriteViewData: any = [];
  favoritesCount: string = 'No jokes saved yet!';
  constructor() {}

  ngOnInit() {
    this.showFavorites();
    this.countFavorites();
  }
  showFavorites() {
    this.favoriteViewData = JSON.parse(localStorage.getItem('favorites')!);
  }
  countFavorites() {
    {
      !this.favoriteViewData.length
        ? (this.favoritesCount = ' No saved jokes yet!')
        : this.favoriteViewData.length === 1
        ? (this.favoritesCount = ' You have 1 saved joke!')
        : this.favoriteViewData.length > 1
        ? (this.favoritesCount = `You have  ${this.favoriteViewData.length} saved jokes!`)
        : null;
    }
  }

  deleteJoke(id: string) {
    this.favoriteViewData = this.favoriteViewData.filter(
      (joke: any) => joke.id !== id
    );
    localStorage.setItem('favorites', JSON.stringify(this.favoriteViewData));
    this.countFavorites();
  }

  deleteLocalStorage() {
    localStorage.removeItem('favorites');
    window.location.reload();
  }
}
