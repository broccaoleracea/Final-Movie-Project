/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "../../components/Card/Card";
import TrendMovieFetcher from "../../components/Fetcher/TrendingMovieFetcher";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const trend = useSelector((state) => state.trend.trend);

  return (
    <div className="bg-base-100  min-h-screen">
      {/* Hero Section */}
      <div className="hero h-96 bg-base-300">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Movies Hub</h1>
            <p className="py-6">
              Discover a collection of movies curated just for you. From latest
              releases to all-time favorites. wonderhoy :)
            </p>
            <button className="btn btn-primary">Browse Movies</button>
          </div>
        </div>
      </div>

      <div className="py-10">
        <TrendMovieFetcher />
        <h2 className="text-3xl text-center font-semibold mb-8">Trending</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto max-w-6xl px-4">
          {trend?.map((movie) => (
            <div key={movie.id} className="">
              <Card
                imgUrl={movie.poster_path}
                title={movie.media_type === "tv" ? movie.name : movie.title}
                id={movie.id}
                desc={movie.overview}
                rating={movie.vote_average}
                mediaType={movie.media_type}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Movies What's popular section */}
      <div className="py-10">
        <h2 className="text-3xl text-center font-semibold mb-8">
          What's popular
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto max-w-6xl px-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-base-300 text-center py-4 mt-10">
        <p>© 2024 Movies Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;

{
  /* <div className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700">
            <h3 className="text-xl"></h3>
          </div>
          <div className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700">
            <h3 className="text-xl"></h3>
          </div>
          <div className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700">
            <h3 className="text-xl"></h3>
          </div>
          <div className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700">
            <h3 className="text-xl"></h3>
          </div> */
}
