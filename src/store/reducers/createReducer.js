/**
 * Combine all reducers in this file and export the combined reducers.
 */


import { combineReducers } from 'redux';
import { createRouterMiddleware, initialRouterState, routerReducer } from 'connected-next-router'
import globalReducer from "../../Others/App/reducer"




/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
      router: routerReducer,
      global: globalReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
