import React, {Component} from "react"
import {getTopics} from "../Api"

class Home extends Component{
	constructor (props){
		super(props);
		this.state = {
			list: [{title: 1}, {title: 2}]
		}
	}
	componentDidMount () {
		getTopics().then((response) => {
			const data = response.data;
			if (data.success) {
				this.setState({
					list: data.data
				})
			}
		})
	}
	render() {
		return (
			<div>
				Home
				<ul>
					{
						this.state.list.map(item => (
							<li>{item.title}</li>
						))
					}
				</ul>
			</div>
		);
	}

};

export default Home;