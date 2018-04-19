import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider, connect } from "react-redux";
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

import { Toast } from "components/atoms";

import { Blog, reducer as blogReducer } from "data/Blog";
import { add as addComments, fetchComments } from "data/Comment";
import { add as addPhotos, fetchPhotos } from "data/Photo";
import { add as addPosts, fetchPosts } from "data/Post";
import { add as addUsers, fetchUsers } from "data/User";

import c from "./index.scss";

const store = createStore(blogReducer, new Blog(), composeWithDevTools());
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

const RenderToast = connect((state: Blog) => ({ text: state.notification }))(
  Toast,
);

const renderRoot = () => {
  const blog = (
    <Provider store={store}>
      <Router>
        <>
          <Masthead className={c.masthead} />
          <Switch>
            <Route exact path="/" render={renderHomePage} />
            <Route exact path="/404" render={renderNotFoundPage} />
            <Route exact path="/create" render={renderCreatePostPage} />
            <Route exact path="/:postId" render={renderViewPostPage} />
            <Route exact path="/u/:authorId" render={renderAuthorPage} />
            <Redirect from="/*" to="/404" />
          </Switch>
          <RenderToast />
        </>
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

fetchPosts()
  .then(posts => store.dispatch(addPosts(posts)))
  .catch(console.error);
fetchComments()
  .then(comments => store.dispatch(addComments(comments)))
  .catch(console.error);
fetchUsers()
  .then(users => store.dispatch(addUsers(users)))
  .catch(console.error);
fetchPhotos()
  .then(photos => store.dispatch(addPhotos(photos)))
  .catch(console.error);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("components/pages", renderRoot);
}
