import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCart from "./MovieCart";
import useSWR from "swr";
import { fetcher } from "../../config";

// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>
// 7ac7f417e57e14a219be2469ac078664

const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=7ac7f417e57e14a219be2469ac078664`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCart item={item}></MovieCart>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
