import { IBoardGame } from './../interfaces/BoardGame';

const BoardGame = (props: { boardgame: IBoardGame }) => {
    const { boardgame } = props;
    return (
      <div className="boardgame">
        <div className="title">
          <img src={boardgame.image_url} alt={boardgame.name} />
          <p>{boardgame.name}</p>
        </div>

        <a href={boardgame.official_url} target="_bla">View Board Game</a>
      </div>
    )
};

export default BoardGame;