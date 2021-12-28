import React, { FormEvent, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { IBoardGame } from './interfaces/BoardGame';
import BoardGame from './components/BoardGame';

const clientID = 'S9ijXOL64w';

export default function App() {
  const [boardGamesFound, setBoardGamesFound] = useState<IBoardGame[]>([]);
  const [boardGameSearch, setBoardGameSearch] = useState('');

  const searchForBoardGames = async (query: String): Promise<IBoardGame[]> => {
    const result = await fetch(`https://api.boardgameatlas.com/api/search?name=${query}&client_id=${clientID}`)
    return (await result.json()).games;
  };

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(boardGameSearch);
      const response = await searchForBoardGames(query);
      setBoardGamesFound(response);

    })();
  }, [boardGameSearch]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('#searchText') as HTMLInputElement;
    setBoardGameSearch(input.value);
    input.value = '';
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <h1>Board Game Search App</h1>
        <Button variant="contained">Hello World</Button>
        <form className="searchForm" onSubmit={event => search(event)} >
          <input id="searchText" type="text" />
          <button>Search</button>
        </form>
        {boardGameSearch && <p>Results for {boardGameSearch}...</p>}
        <div className="boardgame-container">
          {boardGamesFound &&
            boardGamesFound.map(boardgame => (<BoardGame key={boardgame.name} boardgame={boardgame}></BoardGame>))
          }
        </div>
      </div>
    </React.Fragment>
  );
}
