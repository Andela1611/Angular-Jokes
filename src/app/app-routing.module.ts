import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { IndexComponent } from './components/index/index.component';

const appRoutes: Routes = [
  {
    component: IndexComponent,
    path: '',
  },
  {
    component: FavoritesComponent,
    path: 'favorites',
  },
  { component: IndexComponent, path: '**' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
