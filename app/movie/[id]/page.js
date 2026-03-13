const API_KEY = process.env.OMDB_API_KEY;

async function getMovie(id) {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`,
      { cache: "no-store" }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Movie fetch error:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {

  const { id } = await params;   
  const movie = await getMovie(id);

  if (!movie || movie.Response === "False") {
    return {
      title: "Movie Not Found",
      description: "Movie data unavailable",
    };
  }

  return {
    title: movie.Title,
    description: movie.Plot,
  };
}

export default async function MoviePage({ params }) {

  const { id } = await params;   

  const movie = await getMovie(id);

  if (!movie || movie.Response === "False") {
    return <h1 className="text-white p-10">Movie not found</h1>;
  }

  return (
    <div className="p-10 bg-black min-h-screen text-white">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          {movie.Title}
        </h1>

        <img
          src={movie.Poster}
          alt={movie.Title}
          className="mb-6 rounded-lg"
        />

        <p className="mb-4">{movie.Plot}</p>

        <p> IMDB Rating: {movie.imdbRating}</p>
        <p>Year: {movie.Year}</p>
        <p>Genre: {movie.Genre}</p>

      </div>

    </div>
  );
}