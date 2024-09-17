import React, { useContext, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumnItem from "./AlbumnItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  const { songList, ratings, comments, addRating, addComment } =
    useContext(PlayerContext);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState("");
  const [selectedSongId, setSelectedSongId] = useState(null);

  const handleCommentSubmit = (id) => {
    addComment(id, newComment);
    setNewComment("");
  };

  const handleRatingSubmit = (id) => {
    addRating(id, newRating);
    setNewRating("");
  };

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
        <div className="flex flex-wrap overflow-auto">
          {songsData.map((item, index) => (
            <div key={index} className="p-2">
              <SongItem
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
              <p className="text-white">
                Rating: {ratings[item.id] || "No rating yet"}
              </p>
              <p className="text-white">
                {comments[item.id]?.length || 0} comments
              </p>

              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                placeholder="Rate (0-5)"
                value={newRating}
                onChange={(e) => setNewRating(e.target.value)}
              />
              <button onClick={() => handleRatingSubmit(item.id)}>
                Submit Rating
              </button>

              <textarea
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={() => handleCommentSubmit(item.id)}>
                Submit Comment
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
