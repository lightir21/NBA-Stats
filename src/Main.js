import React, { useEffect, useState } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";

const Main = ({ player, setPlayer, url }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [players, setPlayers] = useState([]);

  const [playerId, setPlayerId] = useState(null);

  const onChangeHandler = (text) => {
    setSearchTerm(text);
  };

  useEffect(async () => {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${searchTerm}&per_page=24${
        searchTerm ? "" : "&page=120"
      }`
    );
    const data = await response.json();

    setPlayers(data.data);
  }, [searchTerm]);

  <Player />;

  return (
    <>
      <header className="header">
        <h1 className="header-title">NBA-STATUS</h1>
        <h2 className="header-secondary-title">
          NBA players statistics for season 21-22
        </h2>

        <form>
          <input
            type="text"
            className="search"
            onChange={(e) => onChangeHandler(e.target.value)}
            value={searchTerm}
            placeholder="Search for a player (e.g Lebron James)"
          />
        </form>
      </header>
      <main className="main-container">
        {players.map((player) => (
          <Link to={`/Player/${player.id}`} className="player" key={player.id}>
            <p>{`${player.first_name} ${player.last_name}`}</p>
          </Link>
        ))}
      </main>
    </>
  );
};

export default Main;
