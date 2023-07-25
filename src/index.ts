import './styles/main.scss';

import Application from './application';
import Game from './game';

function onReadyCallback(app: Application) {
  console.log('new instance of `Application` created');
  console.log(app);

  const game = new Game(app);
  console.log('new instance of `Game` created');
  console.log(game);
}

console.log(`process.env.MY_APP_BASE_URL = ${process.env.MY_APP_BASE_URL}`);
console.log(`process.env.MY_APP_API_URL = ${process.env.MY_APP_API_URL}`);

new Application(onReadyCallback);
