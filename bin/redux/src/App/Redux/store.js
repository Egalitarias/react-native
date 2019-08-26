import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import placeReducer from "./Reducers/placeReducer";
import thunk from "redux-thunk";

// https://blog.reactnativecoach.com/debugging-react-native-and-redux-with-react-native-debugger-62f6ceef3033

const rootReducer = combineReducers({
  places: placeReducer
});

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
};

export default configureStore;
