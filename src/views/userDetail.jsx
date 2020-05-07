import React, { Component } from "react";

import { getUserDetail } from "../Api";

import { ContentContainer, AsideContainer } from "../components";

import "./userDetail.scss";

function List(props, ItemFn) {
  const { list } = props;
  return (
    <ul className="recent-reply-list">
      {list.map((item) => {
        return ItemFn(item);
      })}
    </ul>
  );
}

function ReplyItem(props) {
  console.log(props);
  return <li key={props.id}></li>;
}
function TopicItem(props) {
  return <li key={props.id}></li>;
}

function RecentReply(props) {
  return List(props, ReplyItem);
}

function RecentTopics(props) {
  return List(props, TopicItem);
}

function WithContent(Content) {
  return class extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <div className="header"></div>
          <Content {...this.props} />
        </div>
      );
    }
  };
}
const userInfo = function (props) {
  const { loginname, avatar_url, score } = props;
  return (
    <div className="user-info">
      <img src={avatar_url} alt="" />
      <p>{loginname}</p>
      <p>{score}</p>
    </div>
  );
};
const UserInfoContent = WithContent(userInfo);

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
    };
  }
  componentDidMount() {
    const id = this.props.params.id;
    this.getData(id);
  }
  getData(id) {
    getUserDetail(id).then((response) => {
      if (response.success) {
        this.setState({
          detail: response.data,
        });
      }
    });
  }
  render() {
    const {
      loginname,
      avatar_url,
      recent_replies = [],
      recent_topics,
      score,
    } = this.state.detail;
    const detail = this.state.detail;
    return (
      <div className="home user">
        {detail.loginname ? (
          <ContentContainer>
            <UserInfoContent
              loginname={loginname}
              avatar_url={avatar_url}
              score={score}
            ></UserInfoContent>
            <RecentReply list={recent_replies}></RecentReply>
            {/* 最近创建的话题列表 */}
            <RecentTopics list={recent_topics}></RecentTopics>
            {/* 最近参与的话题列表 */}
          </ContentContainer>
        ) : null}
        <AsideContainer></AsideContainer>
      </div>
    );
  }
}

export default UserDetail;
