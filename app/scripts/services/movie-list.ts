/// <reference path="../app.ts" />

module angularTsSampleApp2App {

  'use strict';

  export class MovieList {
    private movies: IMovie[] = [
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

    getMoviesList (): IMovie[] {
      return this.movies;
    };

    addMovie (movie: IMovie): void {
      this.movies.push(movie);
    };

    removeMovie (title: string): void {
      if (title !== '') {
        for (var i: number = 0; i < this.movies.length; i++) {
          var obj: IMovie = this.movies[i];
          if (title.indexOf(obj.Title) !== -1) {
            this.movies.splice(i, 1);
            break;
          }
        }
      }
    };

  }
}

angular.module('angularTsSampleApp2App')
  .service('movieList', angularTsSampleApp2App.MovieList);
