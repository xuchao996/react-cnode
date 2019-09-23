import React, {Component} from "react"

import { getUserDetail } from "../Api";

import {ContentContainer, AsideContainer} from "../components";

class TopicDetail extends Component{
    constructor (props) {
        super(props)
        this.state = {
            detail: {}
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
        const {loginname} = this.state.detail;
		return (
			<div className="home user">
				<ContentContainer>
                    <div className="user-info">
                        <p>{loginname}</p>
                    </div>
                    {/* 最近创建的话题列表 */}
                    {/* 最近参与的话题列表 */}
                </ContentContainer>
                <AsideContainer></AsideContainer>
			</div>
		);
	}

};

export default TopicDetail;