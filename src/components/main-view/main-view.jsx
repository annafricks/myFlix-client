import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
//import { LoginView } from "../login-view/login-view";
//import { SignupView } from "../signup-view/signup-view";
//import { NavigationBar } from "../navigation-bar/navigation-bar";
//import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Seven",
      image: [],
      genre: "Mystery",
      description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      director: "David Fincher",
      featured: true
    },
    {
      id: 2,
      title: "The Witch",
      image: [],
      genre: "Horror",
      description: "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.",
      director: "Robert Eggers",
      featured: true
    },
    {
      id: 3,
      title: "Romy and Michele's High School Reunion",
      image: [],
      genre: "Comedy",
      description: "Two dim-witted, inseparable friends hit the road for their ten-year high school reunion and concoct an elaborate lie about their lives in order to impress their classmates.",
      director: "David Mirkin",
      featured: true
    },
    {
      id: 4,
      title: "How to Lose a Guy in 10 Days",
      image: [],
      genre: "Romantic Comedy",
      description: "...",
      director: "Donald Petrie", 
      featured: false
    },
    {
      id: 5,
      title: "The Wolf of Wall Street",
      image: [],
      genre: "Crime",
      description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      director: "Martin Scorsese",
      featured: false
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
