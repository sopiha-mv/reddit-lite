import React from 'react';
import PostList from '../components/PostList.jsx';
import renderer from 'react-test-renderer';

it("render correctly text component", () => {
	const list = [
		{
			data: {
				id: 'mockId',
				title: 'mockTitle',
				postLink: 'mockPostLink',
				thumbnail: 'mockThumbnail',
				author: 'mockAuthor',
				authorUrl: 'mockAuthorUrl',
				time: 'mockTime',
			}
		}
	];
	
	const component = renderer.create(
		<PostList list={list} />
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});