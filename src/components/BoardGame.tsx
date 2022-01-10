import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { IBoardGame } from '../interfaces/BoardGame';

const BoardGame = (props: { boardgame: IBoardGame }) => {
    const { boardgame } = props;
    return (
      <div className="boardgame">
        <div className="title">
          <img width="120" src={boardgame.image_url} alt={boardgame.name} />
          <h2>{boardgame.name}</h2>
          <p><b>Price:</b> ${boardgame.price}</p>
        </div>
        <Button component={Link} to={'/boardgame/'+boardgame.id } variant="contained">Details&nbsp;&raquo;</Button>
      </div>
    )
};

export default BoardGame;