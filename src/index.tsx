import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";

import {
  AuthorPage,
  CreatePostPage,
  HomePage,
  NotFoundPage,
  ViewPostPage,
} from "components/pages";

const store = createStore(_ => ({}));
const rootElem = document.querySelector(".root");

const renderRoot = () => {
  const blog = (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/create" component={CreatePostPage} />
          <Route exact path="/:postId" component={ViewPostPage} />
          <Route exact path="/u/:authorId" component={AuthorPage} />
        </Switch>
      </Router>
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

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("components/pages", renderRoot);
}
