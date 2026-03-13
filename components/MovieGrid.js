import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {

  if (!movies.length) {
    return (
      <p className="text-center text-gray-400">
        No movies found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {movies.map((movie, index) => (
        <MovieCard
          key={`${movie.imdbID}-${index}`}
          movie={movie}
        />
      ))}

    </div>
  );
}