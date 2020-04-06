import React, { Component } from "react";

import { getTopicDetail } from "../Api";

import { ContentContainer, AsideContainer } from "../components";

import "./topicDetail.scss";

function ReplyList(props) {
  const { replies } = props;
  return (
    <ul className="reply-list">
      {replies.map(item => (
        <li className="reply-list-item" key={item.id}>
          <p className="item-title">{item.author.loginname}</p>
          <code dangerouslySetInnerHTML={{ __html: item.content }}></code>
        </li>
      ))}
    </ul>
  );
}

class TopicDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {}
    };
  }
  async componentDidMount() {
    const id = this.props.params.id;
    await this.getData(id);
  }
  async getData(id) {
    await getTopicDetail(id).then(response => {
      console.log(response);
      if (response.success) {
        this.setState({
          detail: response.data
        });
      }
    });
  }
  render() {
    console.log("test");
    const { author = {}, replies = [] } = this.state.detail;
    const detail = this.state.detail;
    return (
      <div className="home detail">
        <ContentContainer>
          <div className="content-header">
            <h3 className="title">
              {detail.top ? <i>Up</i> : null}
              {this.state.detail.title}
            </h3>
            <p className="author">
              <img src={author.avatar_url} alt="" />
              <span className="author-name">{author.loginname}</span>
            </p>
          </div>
          <code dangerouslySetInnerHTML={{ __html: detail.content }}></code>
          {replies.length ? <ReplyList replies={replies}></ReplyList> : null}
        </ContentContainer>
        <AsideContainer>
          <div className="aside-item">
            <p className="aside-item__header"></p>
            <p className="aside-item__content"></p>
          </div>
        </AsideContainer>
      </div>
    );
  }
}

export default TopicDetail;
