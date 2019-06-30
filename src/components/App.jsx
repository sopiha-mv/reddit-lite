import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getPosts, refreshPosts } from '../actions/postActions.js';
import PostList from './PostList.jsx';

class App extends Component {
	constructor(props) {
		super(props);
	}

	getPrevPosts = () => {
		let firstPost = this.props.post.data.children[0];
		this.props.getPosts({before: firstPost.data.name});
	};

	getNextPosts = () => {
		let lastPost = this.props.post.data.children.slice(-1)[0];
		this.props.getPosts({after: lastPost.data.name});
	};

	render() {
		return (
			<div className={'pb-3'}>
				<PostList list={this.props.post.data.children} />
				<ul className={'pagination d-flex justify-content-center'}>
					<li className={'page-item'}>
						<a href={'#'} className={'page-link'} onClick={() => this.getPrevPosts()}>
							Previous
						</a>
					</li>
					<li className={'page-item'}>
						<a href={'#'} className={'page-link'} onClick={() => this.getNextPosts()}>
							Next
						</a>
					</li>
				</ul>
			</div>
		);
	}

	componentDidMount() {
		this.props.getPosts();
		window.setInterval(() => {
			this.props.refreshPosts(this.props.post.refreshUrl);
		}, 60 * 1000);
	}
}

const mapStateToProps = state => ({
	post: state.post
});

const mapDispatchToProps = dispatch => ({
	getPosts: (callData) => dispatch(getPosts(callData)),
	refreshPosts: (callData) => dispatch(refreshPosts(callData)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);