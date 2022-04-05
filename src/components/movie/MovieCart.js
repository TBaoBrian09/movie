import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCart = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigation = useNavigate();
  return (
    <div className="movie-card select-none flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 ">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button
          onClick={() => navigation(`/movie/${id}`)}
          className="py-3 px-6 mt-auto rounded-lg capitalize bg-primary w-full"
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCart;
