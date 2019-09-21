import React, {Component, Fragment} from "react"
import {getTopics} from "../Api"
import "./home.scss";

import { PropTypes } from "prop-types";

function ListItem (props) {
	const author = props.item.author
	const item = props.item
	const clickHandler = function (e) {
		e.stopPropagation()
		props.handleClickUser(item)
	}
	return (
		<Fragment>
			<li onClick={() => props.handleClickItem(item)}>{/*带参数问题*/}
				<div className="person" onClick={clickHandler}>
					<img src={author.avatar_url} alt="" />
				</div>
				<div className="count">
					<span className="visit_count">{item.visit_count}</span>/
					<span className="reply_count">{item.reply_count}</span>
				</div>
				<div className="title">
					{props.children}
				</div>
			</li>
		</Fragment>
	)
}
function Tabs (props) {
	const list = [
		{
			name: '全部',
			code: ''
		},{
			name: '分享',
			code: 'share'
		},{
			name: '问答',
			code: 'ask'
		},{
			name: '招聘',
			code: 'job'
		},
		// {
		// 	name: '客户端测试',
		// 	code: 'test'
		// }
	]
	return (
		<ul className="tabs">
			{
				list.map(item => {
					return <li onClick={() => props.handleToggleTab(item.code)} key={item.code} className={props.code===item.code?'active': null}>{item.name}</li>
				})
			}
		</ul>
	)
}

function ContentContainer (props) {
	return (
		<div className="main">
			{props.children}
		</div>
	)
}
function AsideContainer (props) {
	return (
		<aside className="aside">
			{props.children}
		</aside>
	)
}

class Home extends Component{
	constructor (props){
		super(props);
		this.state = {
			list: [],
			tab: ''
		}
		this.handleClickItem = this.handleClickItem.bind(this)
		this.handleToggleTab = this.handleToggleTab.bind(this)
		this.handleClickUser = this.handleClickUser.bind(this)
	}
	componentDidMount () {
		getTopics().then((response) => {
			const data = response;
			if (data.success) {
				this.setState({
					list: data.data
				})
			}
		})
	}
	handleClickItem (target) {
		const {id} = target;
		if (!id) return;
		this.context.router.push({
			pathname: '/detail/' + id,
		})
	}
	handleClickUser (target) {
		console.log(target);
		const {author} = target;
		this.context.router.push({
			pathname: '/user/' + author.loginname,
		})
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

	handleToggleTab (value) {
		getTopics({
			tab: value
		}).then((response) => {
			const data = response;
			if (data.success) {
				this.setState({
					list: data.data,
					tab: value
				})
			}
		})
	}
	render() {
		return (
			<div className="home">
				<ContentContainer>
					<Tabs code={this.state.tab} handleToggleTab={this.handleToggleTab}></Tabs>
					<ul className="list">
						{
							this.state.list.map(item => (
								<ListItem item={item} key={item.id} 
									handleClickItem={this.handleClickItem}
									handleClickUser={this.handleClickUser}
								>
									{item.title}
								</ListItem>
							))
						}
					</ul>
				</ContentContainer>
			</div>
		);
	}

};

Home.contextTypes = {
    router: PropTypes.object
}

export default Home;