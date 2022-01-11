import React, { useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { Link, useParams } from "react-router-dom";
import { FormHelperText, Button, Box } from '@mui/material';
import api from '../utils/api';
import BoardGameDetail from "../components/BoardGameDetail";
import Loader from "../components/Loader";
import { IBoardGame } from "../interfaces/BoardGame";

const BoardgameDetailPage = () => {
  const { boardgameId } = useParams();
  const [boardgame, setBoardgame] = useState<IBoardGame>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchBoardGame = async (boardgameId: string | undefined) => {
    setLoading(true);
    let data = await api.get(`search?`, {
      params: { 
        ids : boardgameId
      }
    })
    .then(({data}) =>
      data
    ).catch(error => {
      setError(error)
    });

    setBoardgame(data.games[0])
    setLoading(false)
    
  };

  useEffect(() => {
   fetchBoardGame(boardgameId);
  }, [boardgameId]);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="main">
      <Box textAlign="left" sx={{ flexGrow: 1, mt: 2 }}>
        <Button component={Link} to={'/' } size="small">&laquo;&nbsp;Back to Boardgame Search</Button>
      </Box>
      {error && (
        <FormHelperText>Some error occurred, while fetching board games API</FormHelperText>
      )}
      <Loader loading={loading}>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Loader>
      {boardgame && <BoardGameDetail boardgame={boardgame} />}
      </div>
    </React.Fragment>
  );
};

export default BoardgameDetailPage;
