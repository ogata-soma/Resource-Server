import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

class GitHubUserInfoGetApi extends Component{
    constructor(){
        super();
        this.state = {
            userDatas:[]
        };
    }
    componentWillMount(){
        const request = axios.create({
            baseURL: 'https://api.github.com'
        })
        request.get('/users/ogata-soma')
            .then(res => {
                this.setState({
                    userDatas: res.data
                });
            })
    }

    render() {
        return (
            <Fragment>
                <header className="header"></header>
                <div className="user">
                    <p className="user_img"><img src={this.state.userDatas.avatar_url}/ ></p>
                    <div className="user_name">{this.state.userDatas.name}</div>
                    <div className="user_id">{this.state.userDatas.login}</div>
                    <div className="user_followArea">
                        <div className="user_followers">followers:{this.state.userDatas.followers}</div>
                        <div className="user_following">following:{this.state.userDatas.following}</div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

if (document.getElementById('gitHubUserInfoGetApi')) {
    const Index = ReactDOM.createRoot(document.getElementById("gitHubUserInfoGetApi"));
    Index.render(<GitHubUserInfoGetApi/>)
}


