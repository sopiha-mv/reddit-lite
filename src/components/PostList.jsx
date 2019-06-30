import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem.jsx';
import { timeConverter } from '../common/timeConverter.js';

const PostList = ({ list }) => (
	<ul className={'list-unstyled'}>
		{
			list.map(item => {
				let data = item.data;
				return <PostItem
					key={data.id}
					title={data.title}
					postLink={'https://www.reddit.com' + data.permalink}
					thumbnail={data.thumbnail}
					author={data.author}
					time={timeConverter(data.created_utc)}
				/>
			})
		}
	</ul>
);

PostList.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			postLink: PropTypes.string,
			thumbnail: PropTypes.string,
			author: PropTypes.string,
			time: PropTypes.string,
			permalink: PropTypes.string,
		})
	).isRequired,
};

export default PostList;