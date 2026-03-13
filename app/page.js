import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";

const API_KEY = process.env.OMDB_API_KEY;

async function getMovies(search) {
  const query = search || "batman";

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return data.Search || [];
}

export default async function Home({ searchParams }) {

  const params = await searchParams;
  const movies = await getMovies(params.search);

  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 bg-black min-h-screen text-white">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        MoviesFlix
      </h1>

      <div className="max-w-4xl mx-auto mb-6">
        <SearchBar />
      </div>

      <MovieGrid movies={movies} />

    </main>
  );
}