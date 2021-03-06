import { combineReducers } from 'redux';
import ErrorsReducer from './errors/errors_reducer';
import SessionReducer from './session/session_reducer';
import EntitiesReducer from './entities/entities_reducer';
import GiphyReducer from './giphy/giphy_reducer';
import ScoreReducer from './score/score_reducer';

export default combineReducers({
  entities: EntitiesReducer,
  errors: ErrorsReducer,
  session: SessionReducer,
  giphys: GiphyReducer,
  score: ScoreReducer
});
