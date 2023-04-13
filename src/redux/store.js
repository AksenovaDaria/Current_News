// import { createStore, compose } from "redux";
import rootReducer from "./RootReducer";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const composedEnhancer = composeWithDevTools(
  // Add whatever middleware you actually want to use here
  applyMiddleware()
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)
export default store


// const composeEnhancers =
//   process.env.NODE_ENV !== "production" &&
//   typeof window === "object" &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const configureStore = (preloadedState) =>
//   createStore(
//     rootReducer,
//     preloadedState,
//     composeEnhancers(),
//     composeWithDevTools(applyMiddleware(thunk))
//   );

// const store = configureStore({});

// export default store;
