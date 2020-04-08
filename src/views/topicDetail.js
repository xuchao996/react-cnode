import React, { Component } from "react";

import { getTopicDetail } from "../Api";

import { ContentContainer, AsideContainer } from "../components";

import "./topicDetail.scss";

function ReplyList(props) {
  const { replies } = props;
  return (
    <ul className="reply-list">
      {replies.map((item) => (
        <li className="reply-list-item" key={item.id}>
          <div className="item-title">
            <img src={item.author.avatar_url} alt="" />
            <div className="name">{item.author.loginname}</div>
          </div>
          <div
            className="reply_content"
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></div>
        </li>
      ))}
    </ul>
  );
}

class TopicDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
    };
  }
  async componentDidMount() {
    const id = this.props.params.id;
    await this.getData(id);
  }
  async getData(id) {
    await getTopicDetail(id).then((response) => {
      console.log(response);
      if (response.success) {
        this.setState({
          detail: response.data,
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
          <div className="panel">
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
            <div className="content-container">
              <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
            </div>
          </div>
          <div className="panel">
            <p className="replies-header">{replies.length}回复</p>
            {replies.length ? <ReplyList replies={replies}></ReplyList> : null}
          </div>
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
