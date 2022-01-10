import { Link } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import { IBoardGame } from '../interfaces/BoardGame';

const BoardGame = (props: { boardgame: IBoardGame }) => {
    const { boardgame } = props;
    return (
      <div className="boardgame">
        <div className="title">
          <Link to={'/boardgame/'+boardgame.id }>
            <img height="220" src={boardgame.image_url} alt={boardgame.name} />
          </Link>
          <Typography gutterBottom variant="h5" component="div">
            {boardgame.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Price:</b> ${boardgame.price}
            </Typography>
        </div>
        <Button component={Link} to={'/boardgame/'+boardgame.id } size="small">Learn More</Button>
      </div>
    )
};

export default BoardGame;