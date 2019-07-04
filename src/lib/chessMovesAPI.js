import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/chess';

export async function getPossibleMoves(position) {
  const { data } = await axios.get(`${apiURL}/knight/${position}/${2}`);
  return data;
}
