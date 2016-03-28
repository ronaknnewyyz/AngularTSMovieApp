/// <reference path="../app.ts" />

'use strict';


module angularTsSampleApp2App {
  export class MovieList {
    getMoviesList = function (): IMovie[] {
      return this.movies;
    };
    addMovie = function (movie: IMovie): void {
      this.movies.push(movie);
    };
    removeMovie = function (title: string): void {
      if (title !== '') {
        for (var i = 0; i < this.movies.length; i++) {
          var obj = this.movies[i];
          if (title.indexOf(obj.Title) !== -1) {
            this.movies.splice(i, 1);
            break;
          }
        }
      }
    };

    movies: IMovie[] = [
      {
        'Title' : 'Now you see me',
        'Year' : '2014',
        'Director' : 'Speilberg',
        'Favourite' : true,
        'Watched' : false
      },
      {
        'Title' : 'Titanic',
        'Year' : '2000',
        'Director' : 'Mac',
        'Favourite' : true,
        'Watched' : false
      },
      {
        'Title' : 'Bourne Identity',
        'Year' : '2002',
        'Director' : 'Steve',
        'Favourite' : true,
        'Watched' : true
      },
      {
        'Title' : 'Bridge of Spies',
        'Year' : '1998',
        'Director' : 'Cruise',
        'Favourite' : false,
        'Watched' : false
      }
    ];
  }
}

angular.module('angularTsSampleApp2App')
  .service('movieList', angularTsSampleApp2App.MovieList);
