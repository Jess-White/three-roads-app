import axios from 'axios';

// export const addNewPlayer = ({username, email}) => {
//   return axios
//     .post('/api/players', {username, email})
//     .then(response => response.data)
// }

export const addFinalScore = ({username, incorrect, correct}) => {
  return axios 
    .post('/api/scores', {username, incorrect, correct})
    .then(response => response.data)
}

export const getAllScores = () => {
  return axios('/api/scores')
    .then(response => response.data)
}