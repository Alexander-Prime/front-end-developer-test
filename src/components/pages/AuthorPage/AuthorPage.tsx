import classnames from "classnames";
import React from "react";
import { Icon } from "react-atoms";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { CommonAttributes } from "common/types";

import { Blog } from "data/Blog";
import { User } from "data/User";

import c from "./AuthorPage.scss";

interface RouteParams {
  authorId: string;
}

interface OwnProps extends CommonAttributes, RouteComponentProps<RouteParams> {}

interface StateProps {
  author: User;
}

type Props = OwnProps & StateProps;

const PartialAuthorPage = (props: Props) => (
  <main className={classnames(props.className, c.authorPage)}>
    <section className={c["authorPage-info"]}>
      <header className={c["authorPage-info-header"]}>
        <div className={c["authorPage-info-header-name"]}>
          {props.author.name}
        </div>
        <div className={c["authorPage-info-header-username"]}>
          {props.author.username}
        </div>
      </header>
      <div className={c["authorPage-info-detail"]}>
        <Icon name="email" className={c["authorPage-info-detail-icon"]} />
        {props.author.email}
      </div>
      <div className={c["authorPage-info-detail"]}>
        <Icon name="phone" className={c["authorPage-info-detail-icon"]} />
        {props.author.phone}
      </div>
      <div className={c["authorPage-info-detail"]}>
        <Icon name="link" className={c["authorPage-info-detail-icon"]} />
        {props.author.website}
      </div>
      <div className={c["authorPage-info-detail"]}>
        <Icon name="business" className={c["authorPage-info-detail-icon"]} />
        {props.author.company.name} <br />
        {props.author.company.catchPhrase} <br />
        {props.author.company.bs}
      </div>
      <div className={c["authorPage-info-location"]}>
        <div>{props.author.address.street}</div>
        <div>{props.author.address.suite}</div>
        <div>{props.author.address.city}</div>
        <div>{props.author.address.zipcode}</div>
      </div>
    </section>
  </main>
);

const mapStateToProps = (state: Blog, props: OwnProps): StateProps => ({
  author: state.users.get(+props.match.params.authorId, new User()),
});

const AuthorPage = connect(mapStateToProps)(PartialAuthorPage);

export { AuthorPage };
