import React, { useContext, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumnItem from "./AlbumnItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  const { songList } = useContext(PlayerContext);

  const [ratings, setRatings] = useState({
    1: 4.5,
    2: 3.8,
    3: 5.0,
  });
  const [comments, setComments] = useState({
    1: ["Great song!", "Love the beat!"],
    2: ["Not my style", "Interesting vibe"],
    3: ["Perfect!"],
  });

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumnItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <div key={index} className="mr-4">
              <SongItem
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
              <p className="text-white">
                Rating: {ratings[item.id] || "No rating"}
              </p>
              <p className="text-white">
                {comments[item.id]?.length || 0} comments
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
