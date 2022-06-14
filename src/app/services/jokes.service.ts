import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(public http: HttpClient) { }

getRandomJoke(){
  return this.http.get('https://api.chucknorris.io/jokes/random');
}


}
