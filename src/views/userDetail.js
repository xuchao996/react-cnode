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
  return <li></li>;
}
function TopicItem(props) {
  return <li></li>;
}

function RecentReply(props) {
  return List(props, ReplyItem);
}

function RecentTopics(props) {
  return List(props, TopicItem);
}

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
            <div className="user-info">
              <img src={avatar_url} alt="" />
              <p>{loginname}</p>
              <p>{score}</p>
            </div>
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
