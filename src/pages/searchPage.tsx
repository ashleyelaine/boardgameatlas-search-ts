import React, { FormEvent, useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Button, FormHelperText, TextField } from '@mui/material';
import { IBoardGame } from '../interfaces/BoardGame';
import api from '../utils/api';
import Loader from '../components/Loader';
import BoardGameList from '../components/BoardGameList';


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [boardgames, setBoardGames] = useState<IBoardGame[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchBoardGames = async (searchTerm: String) => {
    setLoading(true);
    let data = await api.get(`search?&order_by=rank&ascending=false&limit=12`, {
      params: { 
        name : searchTerm
      }
    })
    .then(({data}) =>
      data
    ).catch(error => {
      setError(error)
    });

    setBoardGames(data.games)
    setLoading(false)
    
  };

  useEffect(() => {
    const query = encodeURIComponent(searchTerm);
    fetchBoardGames(query);
  }, [searchTerm]);

  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('#searchText') as HTMLInputElement;
    setSearchTerm(input.value);
    input.value = '';
  };

  const resetSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerm('');
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="main">
        <h1>Board Game Search App</h1>
        <form className="search-form" onSubmit={event => search(event)} >
          <TextField label="Search for board game" variant="outlined" className="search-text" id="searchText" type="search" />
          <Button className="search-btn" type="submit" variant="contained">Search</Button>&nbsp;
          <Button variant="outlined" onClick={event => resetSearch(event)}>Reset</Button>
        </form>
        {error && (
          <FormHelperText>An error occurred while fetching board games API. {error}</FormHelperText>
        )}
        <Loader loading={loading}>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Loader>
        {!loading && searchTerm && (
          <p className="results-for-text">Results for: <i>{searchTerm}</i></p>
        )}
        {!loading && (
          <BoardGameList boardgames={boardgames} />
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchPage;