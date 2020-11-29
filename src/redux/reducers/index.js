import { combineReducers } from 'redux';
import { loaderReducer } from './laoderReducer';
import { dummyReducerAllHabbits } from './allHabbitsReducer';
import addChildReducer from './addChildReducer';
import getAllPresents from './allPresentReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  childrens: addChildReducer.childrens,
  //auth: addChildReducer.token, // Заглушка
  dummyReducerAllHabbits, // Для тестирования, логику нужно переиспользовать
  presents: getAllPresents,
  user: authReducer,
});

export default rootReducer;
