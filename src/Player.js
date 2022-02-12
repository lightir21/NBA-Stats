import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const [player, setplayer] = useState(null);
  const [playerName, setPlayerName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const res = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`
    );
    const data = await res.json();
    setplayer(data.data[0]);
    setIsLoading(false);
    console.log(data.data[0]);
  }, [id]);
  useEffect(async () => {
    const res = await fetch(`https://www.balldontlie.io/api/v1/players/${id}`);
    const data = await res.json();
    setPlayerName(data);
    console.log(data);
  }, [id]);

  return (
    <section className="section-player">
      <Link to="/" className="btn-back">
        Back to search
      </Link>
      {!isLoading && (
        <h2 className="section-player__full-name">{`${playerName?.first_name} ${playerName?.last_name}`}</h2>
      )}
      {!isLoading && player === undefined && (
        <h3 className="section-player__error">Info cannot be found</h3>
      )}
      <div className="stats-container">
        {!isLoading && player !== undefined && (
          <>
            <div className="stat">
              Position
              <span className="stat--result">{playerName?.position}</span>
            </div>
            <div className="stat">
              AVG Min<span className="stat--result">{player?.min}</span>
            </div>
            <div className="stat">
              Points pg<span className="stat--result">{player?.pts}</span>
            </div>
            <div className="stat">
              Assists pg
              <span className="stat--result">{player?.ast}</span>
            </div>
            <div className="stat">
              Rebouds pg
              <span className="stat--result">{player?.reb}</span>
            </div>
            <div className="stat">
              Steals pg
              <span className="stat--result">{player?.stl}</span>
            </div>
            <div className="stat">
              Blocks pg
              <span className="stat--result">{player?.blk}</span>
            </div>
            <div className="stat">
              Turnovers pg
              <span className="stat--result">{player?.turnover}</span>
            </div>
            <div className="stat">
              Fouls per game
              <span className="stat--result">{player?.pf}</span>
            </div>
            <div className="stat">
              Field Goal %<span className="stat--result">{player?.fg_pct}</span>
            </div>
            <div className="stat">
              3 Pointer %<span className="stat--result">{player?.fg3_pct}</span>
            </div>
            <div className="stat">
              Free Throw %<span className="stat--result">{player?.ft_pct}</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Player;
