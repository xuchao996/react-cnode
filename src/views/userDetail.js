import React, {Component} from "react"

import { getUserDetail } from "../Api";

class TopicDetail extends Component{
    constructor (props) {
        super(props)
        this.state = {
            detail: null
        }
    }
    componentDidMount () {
        const id = this.props.params.id;
        this.getData(id)
    }
    getData (id) {
        getUserDetail(id).then((response) => {
            console.log(response)
            if (response.success) {
                this.setState({
                    detail: response.data
                })
            }
        })
    }
	render() {
		return (
			<div>
				TopicDetail
                <code dangerouslySetInnerHTML={{__html: this.state.detail && this.state.detail.content}}>
                </code>
			</div>
		);
	}

};

export default TopicDetail;