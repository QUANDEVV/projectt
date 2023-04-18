import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card'>
    <h2>{movie.title}</h2>
    <img src={movie.poster} alt={movie.title} />
    <p>Genre: {movie.plot}</p>
    <p> Year: {movie.year}</p>
  </div>
  );
};

const MovieList = () => {
  const movies = [
    {
      title: "superman",
      poster: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      plot : "Action",
      year: "2019"
    },
    {
      title: "batman",
      poster: "https://images.unsplash.com/photo-1588862081167-d5b98006637e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhdG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      plot : "Horror",
      year: "2020"
    },
    {
      title: "HUlk",
      poster: "https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVsa3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      plot : "Horror",
      year: "2090"
    },
  ];

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieCard movie={movie}


        />
      ))}
    </div>
  );
};

export default MovieList;
