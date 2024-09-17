import React, { useContext, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { RatingsContext } from "../context/RatingsContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  const { addRating, addComment, ratings, comments } =
    useContext(RatingsContext);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(ratings[id] || 0);

  const handleRating = () => {
    if (newRating > 0 && newRating <= 5) {
      addRating(id, newRating);
    }
  };

  const handleCommentSubmit = () => {
    if (newComment) {
      addComment(id, newComment);
      setNewComment("");
    }
  };

  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] text-white">
      <img className="rounded w-full" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>

      <div className="mt-2">
        <p>Rate this song:</p>
        <input
          type="number"
          min="1"
          max="5"
          value={newRating}
          onChange={(e) => setNewRating(e.target.value)}
          className="w-12 text-black text-center"
        />
        <button
          onClick={handleRating}
          className="ml-2 bg-green-500 px-2 rounded"
        >
          Rate
        </button>
        <p>Current Rating: {ratings[id] || "Not rated yet"}</p>
      </div>

      <div className="mt-4">
        <p>Leave a comment:</p>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full text-black px-2 py-1 rounded"
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-2 bg-blue-500 px-4 py-1 rounded"
        >
          Submit
        </button>

        <div className="mt-4">
          <p>Comments:</p>
          {comments[id]?.map((comment, index) => (
            <p key={index} className="text-sm mt-1">
              {comment}
            </p>
          )) || <p>No comments yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default SongItem;
