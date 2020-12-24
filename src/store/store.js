import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools }  from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { createRouterMiddleware, initialRouterState, routerReducer } from 'connected-next-router'
import { format } from 'url'
import Router from 'next/router'
import createSagaMiddleware from 'redux-saga'
import createReducer from "./reducers/createReducer"

const sagaMiddleware = createSagaMiddleware()


const bindMiddleware =  (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
            return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const routerMiddleware = createRouterMiddleware()
const { asPath, pathname, query } = Router.router || {};
let initialState
if (asPath) {
  const url = format({ pathname, query })
  initialState = {
    router: initialRouterState(url, asPath)
  }
}

    const store = createStore(
        createReducer(),
        initialState,
        bindMiddleware([sagaMiddleware, routerMiddleware])
    );

store.runSaga = sagaMiddleware.run;
store.injectedReducers = {}; // Reducer registry
store.injectedSagas = {}; // Saga registry

// Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
 if (module.hot) {
      module.hot.accept('./reducers/createReducer', () => {
        store.replaceReducer(createReducer(store.injectedReducers));
      });
    }

    export default store;
