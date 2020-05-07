import React, { Component, Fragment } from "react";
import { getTopics } from "../Api";
import "./home.scss";

import { PropTypes } from "prop-types";

import { ContentContainer, AsideContainer } from "../components";

import moment from "moment";

import { Spin, Pagination } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function ListItem(props) {
  const author = props.item.author;
  const item = props.item;
  const clickHandler = function (e) {
    e.stopPropagation();
    props.handleClickUser(item);
  };
  const last_reply_at = moment(item.last_reply_at).fromNow("h");
  return (
    <Fragment>
      <li onClick={() => props.handleClickItem(item)}>
        {/*带参数问题*/}
        <div className="person" onClick={clickHandler}>
          <img src={author.avatar_url} alt="" />
        </div>
        <div className="count">
          <span className="reply_count">{item.reply_count}</span>/
          <span className="visit_count">{item.visit_count}</span>
        </div>
        <div className="last_active_time" style={{ float: "right" }}>
          {last_reply_at}
        </div>
        <div className="title">
          <span className={`tag ${item.top ? "tag-top" : null}`}>
            {item.top ? "置顶" : item.tab === "share" ? "分享" : "问答"}
          </span>
          <p title={props.children}>{props.children}</p>
        </div>
      </li>
    </Fragment>
  );
}
function Tabs(props) {
  const list = [
    {
      name: "全部",
      code: "",
    },
    {
      name: "精华",
      code: "good",
    },
    {
      name: "分享",
      code: "share",
    },
    {
      name: "问答",
      code: "ask",
    },
    {
      name: "招聘",
      code: "job",
    },
    // {
    // 	name: '客户端测试',
    // 	code: 'test'
    // }
  ];
  return (
    <ul className="tabs">
      {list.map((item) => {
        return (
          <li
            onClick={() => props.handleToggleTab(item.code)}
            key={item.code}
            className={props.code === item.code ? "active" : null}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      tab: "",
      loading: false,
      currentPage: 1,
    };
    this.handleClickItem = this.handleClickItem.bind(this);
    this.handleToggleTab = this.handleToggleTab.bind(this);
    this.handleClickUser = this.handleClickUser.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }
  componentDidMount() {
    getTopics().then((response) => {
      const data = response;
      if (data.success) {
        this.setState({
          list: data.data,
        });
      }
    });
  }
  onPageChange(page, pageSize) {
    console.log("page", page);
    this.setState({
      loading: true,
    });
    getTopics({
      tab: this.state.tab,
      page,
    }).then((response) => {
      const data = response;
      if (data.success) {
        this.setState({
          list: data.data,
          loading: false,
        });
      }
    });
  }
  handleClickItem(target) {
    const { id } = target;
    if (!id) return;
    this.context.router.push({
      pathname: "/detail/" + id,
    });
  }
  handleClickUser(target) {
    console.log(target);
    const { author } = target;
    this.context.router.push({
      pathname: "/user/" + author.loginname,
    });
    // getUserDetail(author.loginname).then((response) => {
    // 	const data = response;
    // 	if (data.success) {
    // 		// this.setState({
    // 		// 	list: data.data,
    // 		// 	tab: value
    // 		// })
    // 	}
    // })
  }

  handleToggleTab(value) {
    this.setState({
      loading: true,
    });
    getTopics({
      tab: value,
    }).then((response) => {
      const data = response;
      if (data.success) {
        this.setState({
          list: data.data,
          tab: value,
          loading: false,
        });
      }
    });
  }
  render() {
    const { loading, currentPage } = this.state;
    return (
      <div className="home">
        <aside>
          <AsideContainer>
            <p>CNode：Node.js专业中文社区</p>
            <p>
              您可以 <i> 登录 </i>或<i> 注册 </i>, 也可以
              <span> 通过 GitHub 登录</span>
            </p>
          </AsideContainer>
          <AsideContainer>
            <p>CNode：Node.js专业中文社区</p>
            <p>
              您可以 <i> 登录 </i>或<i> 注册 </i>, 也可以
              <span> 通过 GitHub 登录</span>
            </p>
          </AsideContainer>
        </aside>
        <ContentContainer>
          <Tabs
            code={this.state.tab}
            handleToggleTab={this.handleToggleTab}
          ></Tabs>
          <Spin indicator={antIcon} spinning={loading}>
            <ul className="list">
              {this.state.list.map((item) => (
                <ListItem
                  item={item}
                  key={item.id}
                  handleClickItem={this.handleClickItem}
                  handleClickUser={this.handleClickUser}
                >
                  {item.title}
                </ListItem>
              ))}
            </ul>
            <div className="pagination">
              <Pagination
                onChange={this.onPageChange}
                defaultCurrent={currentPage}
                total={500}
                showSizeChanger={false}
              />
            </div>
          </Spin>
        </ContentContainer>
      </div>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object,
};

export default Home;
