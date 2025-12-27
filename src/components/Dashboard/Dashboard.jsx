import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard () {
  return (
    <div className="dashboard">
      <h2>Emoji Critic — Tudo sobre Emojis</h2>
      <p>
       O lugar n.º 1 para avaliações de emojis na Internet desde 2020!
      </p>
      <Link to="/reviews">
        Clique aqui para ver minhas últimas avaliações!
      </Link>
    </div>
  )
}

export default Dashboard;
