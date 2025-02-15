// src/components/Players.jsx
import React from 'react';
import './assets/css/HostRoom.css';

const Players = ({ players }) => {
    return (
        <div className="player-cards-container">
            {players.map((player, index) => (
                <div key={index} className="player-card">
                    <div className="card">
                        <img className="img-1" src={player.avatar || "./images/user-img.jpg"} alt={`Player ${index + 1}`} />
                        <h5>{player.name || `Player ${index + 1}`}</h5>
                        <p>
                            <button>Make Host</button>
                            <button>Remove</button>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Players;
