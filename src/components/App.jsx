import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getPosts, refreshPosts, setLoaded } from '../actions/postActions.js';
import { redditUrl, subredditUrl } from '../actions/postActions.js';
import PostList from './PostList.jsx';
import Navigation from './Navigation.jsx';

class App extends Component {
	constructor(props) {
		super(props);
	}

	getPrevPosts = () => {
		this.props.setLoaded(false);
		let firstPost = this.props.post.data.children[0];
		this.props.getPosts({before: firstPost.data.name});
	};

	getNextPosts = () => {
		this.props.setLoaded(false);
		let lastPost = this.props.post.data.children.slice(-1)[0];
		this.props.getPosts({after: lastPost.data.name});
	};

	render() {
		return (
			<div className={'pb-3'}>
				<Navigation
					getPrev={this.getPrevPosts}
					getNext={this.getNextPosts}
				/>

				<main style={{opacity: this.props.post.isLoaded ? '1' : '0.5'}}>
					<PostList 
						list={this.props.post.data.children}
					/>
				</main>
				
				<Navigation
					getPrev={this.getPrevPosts}
					getNext={this.getNextPosts}
				/>
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
	setLoaded: (callData) => dispatch(setLoaded(callData)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);