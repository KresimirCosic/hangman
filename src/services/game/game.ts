import axios from 'axios';

class GameService {
  wordURL: string;
  resultURL: string;

  constructor() {
    this.wordURL = 'https://random-word-api.herokuapp.com/word';
    this.resultURL =
      'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores';
  }

  getData<T>() {
    return axios.get<T>(this.wordURL);
  }

  postData<T>() {
    return axios.post<T>(this.resultURL);
  }
}

const gameService = new GameService();

export { gameService };
export default GameService;
