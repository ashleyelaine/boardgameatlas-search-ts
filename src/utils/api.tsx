import axios from 'axios';

const clientID = 'S9ijXOL64w';
const api = axios.create({
  baseURL: `https://api.boardgameatlas.com/api/`,
  params: {
    client_id : clientID,
  }
})

export default api