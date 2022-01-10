import { IBoardGame } from '../interfaces/BoardGame';

const BoardGameDetail = (props: { boardgame: IBoardGame }) => {
    const { boardgame } = props;
    return (
      <div className="boardgame">
        <div className="title">
          <img width="120" src={boardgame.image_url} alt={boardgame.name} />
          <h2>{boardgame.name}</h2>
          <p><b>Price:</b> ${boardgame.price}</p>
          <p><small><b>Published:</b> {boardgame.year_published}</small></p>
          <details>
            <summary>Description</summary>
            <p>{boardgame.description_preview}</p>
          </details>
        </div>

        <a href={boardgame.official_url} target="_bla">More&nbsp;&raquo;</a>
      </div>
    )
};

export default BoardGameDetail;