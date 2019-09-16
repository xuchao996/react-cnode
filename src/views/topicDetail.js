import React, {Component} from "react"

import { getTopicDetail } from "../Api";

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
        getTopicDetail(id).then((response) => {
            console.log(response)
            if (response.success) {
                this.setState({
                    detail: response.data
                })
            }
        })
    }
	render() {
        console.log(this.state.detail)
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