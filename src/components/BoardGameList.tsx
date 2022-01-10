import React from 'react';
import { IBoardGame } from '../interfaces/BoardGame';
import BoardGame from '../components/BoardGame';

const BoardGameList = (props: { boardgames: IBoardGame[] }) => {
  const { boardgames } = props;
    return (
      <div className="boardgames">
        {
          boardgames.map((boardgame, index) => {
            return (
              <BoardGame boardgame={boardgame} key={index} />
            );
          })
        }
      </div>
    );
};

export default BoardGameList;