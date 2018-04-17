import React, { Fragment } from "react";
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

import { Masthead } from "components/organisms";
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

import c from "./index.scss";

const store = createStore(blogReducer, composeWithDevTools());
const rootElem = document.querySelector(".blog");

const renderHomePage = (props: any) => (
  <HomePage {...props} className={c.main} />
);

const renderNotFoundPage = (props: any) => (
  <NotFoundPage {...props} className={c.main} />
);

const renderCreatePostPage = (props: any) => (
  <CreatePostPage {...props} className={c.main} />
);

const renderViewPostPage = (props: any) => (
  <ViewPostPage {...props} className={c.main} />
);

const renderAuthorPage = (props: any) => (
  <AuthorPage {...props} className={c.main} />
);

const renderRoot = () => {
  const blog = (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Masthead className={c.masthead} />
          <Switch>
            <Route exact path="/" render={renderHomePage} />
            <Route exact path="/404" render={renderNotFoundPage} />
            <Route exact path="/create" render={renderCreatePostPage} />
            <Route exact path="/:postId" render={renderViewPostPage} />
            <Route exact path="/u/:authorId" render={renderAuthorPage} />
            <Redirect from="/*" to="/404" />
          </Switch>
        </Fragment>
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
