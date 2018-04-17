import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  AuthorPage,
  CreatePostPage,
  HomePage,
  NotFoundPage,
  ViewPostPage,
} from "components/pages";

import { reducer as blogReducer } from "data/Blog";
import { add as addComments, fetchComments } from "data/Comment";
import { add as addPosts, fetchPosts } from "data/Post";
import { add as addUsers, fetchUsers } from "data/User";

const store = createStore(blogReducer, composeWithDevTools());
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
          <Redirect from="/*" to="/404" />
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

fetchPosts().then(posts => store.dispatch(addPosts(posts)));
fetchComments().then(comments => store.dispatch(addComments(comments)));
fetchUsers().then(users => store.dispatch(addUsers(users)));

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("components/pages", renderRoot);
}
