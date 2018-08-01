import * as firebase from 'firebase/app';
import 'firebase/database';

import config from './.config/firebase.json';
import Retro from './retro';

firebase.initializeApp(config);
const api = new Retro(firebase);

export default api;
