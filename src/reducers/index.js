import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import destinationsReducer from './destinationsReducers';

// pour améliorer l'organisation, on combine plusieurs petits reducers plutôt que d'utiliser un énorme Reducer illisible:
const globalReducer = combineReducers({
  /* nom du premier reducer :  nom de l'import du premier */
  users: usersReducer,
  /* nom du deuxieme reducer :  nom de l'import du deuxieme */
  destinations: destinationsReducer
  /* nom du troisième reducer :  nom de l'import du troisième */
});

export default globalReducer;
