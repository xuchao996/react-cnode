import React, {Component, Fragment} from "react"
import {getTopics} from "../Api"
import "./home.scss";

import { PropTypes } from "prop-types";

function ListItem (props) {
	const author = props.item.author
	const item = props.item
	return (
		<Fragment>
			<li onClick={() => props.handleClickItem(item)}>
				<div className="person">
					<img src={author.avatar_url} />
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

class Home extends Component{
	constructor (props){
		super(props);
		this.state = {
			list: []
		}
		this.handleClickItem = this.handleClickItem.bind(this)
	}
	// ask for `router` from context
	// contextTypes: {
	// 	router: React.PropTypes.object
	// }
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
	// 事件委托
	handleClickItem (target) {
		console.log(target);
		const {id} = target;
		if (!id) return;
		this.context.router.push({
			pathname: '/detail/' + id,
		})
	}
	render() {
		return (
			<div>
				<ul className="list">
					{
						this.state.list.map(item => (
							<ListItem item={item} key={item.id} handleClickItem={this.handleClickItem}>
								{item.title}
							</ListItem>
						))
					}
				</ul>
			</div>
		);
	}

};

Home.contextTypes = {
    router: PropTypes.object
}

export default Home;