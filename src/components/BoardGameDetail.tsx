import { Link, Typography, Box, Grid, Table, TableRow, TableCell } from '@mui/material';
import { IBoardGame } from '../interfaces/BoardGame';

const BoardGameDetail = (props: { boardgame: IBoardGame }) => {
    const { boardgame } = props;
    return (
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Grid className="boardgame" container spacing={2}>
          <Grid item xs={12} md={4}>
            <img width="260" src={boardgame.image_url} alt={boardgame.name} />
            <p><b>Price:</b> ${boardgame.price}</p>
            <p><small><b>Published:</b> {boardgame.year_published}</small></p>
          </Grid>
          <Grid textAlign="left" item xs={12} md={8}>
            <Typography gutterBottom variant="h2" component="div">{boardgame.name}</Typography>
            <Typography gutterBottom variant="body1">{boardgame.description_preview}</Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ mt: 3 }}>Details</Typography>
            <Table size="small">
                <TableRow>
                    <TableCell variant="head">Number of Players</TableCell>
                    <TableCell>{boardgame.min_players } - {boardgame.max_players }</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell variant="head">Playtime</TableCell>
                    <TableCell>{boardgame.min_playtime } - {boardgame.max_playtime } Minutes</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell variant="head">Minimum Age</TableCell>
                    <TableCell>{boardgame.min_age }</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell variant="head">Official Site</TableCell>
                    <TableCell><Link href={boardgame.official_url } target="_blank" rel="noreferrer">{boardgame.official_url }</Link></TableCell>
                </TableRow>
            </Table>
          </Grid>
        </Grid>
      </Box>
    )
};

export default BoardGameDetail;