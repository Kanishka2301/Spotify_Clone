import React, { useContext, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import RatingsContextProvider from "./context/RatingsContext"; // Import RatingsContext
import { useTheme } from "./context/ThemeContext";
const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
  }, [isDarkTheme]);
  return (
    <div className="h-screen bg-black">
      <RatingsContextProvider>
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />
      </RatingsContextProvider>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
