import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(_ => ({}));
const rootElem = document.querySelector(".root");

const renderRoot = () => {
  const blog = (
    <Provider store={store}>
      <div>Blog goes here</div>
    </Provider>
  );

  ReactDOM.render(
    process.env.NODE_ENV === "development" ? (
      <AppContainer>{blog}</AppContainer>
    ) : (
      blog
    ),
    rootElem,
  );
};

renderRoot();

// if (process.env.NODE_ENV === "development" && module.hot) {
//   module.hot.accept("components/pages", renderRoot);
// }
