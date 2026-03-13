import Link from "next/link";

export default function MovieCard({ movie }) {

  return (
    <Link href={`/movie/${movie.imdbID}`}>

      <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">

        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-[300px] object-cover"
        />

        <div className="p-3">

          <h3 className="font-bold text-lg">
            {movie.Title}
          </h3>

          <p className="text-gray-400 text-sm">
            {movie.Year}
          </p>

        </div>

      </div>

    </Link>
  );
}