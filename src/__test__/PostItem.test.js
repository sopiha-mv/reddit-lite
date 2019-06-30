import React from 'react';
import PostItem from '../components/PostItem.jsx';
import renderer from 'react-test-renderer';

it("render correctly post component", () => {
	const component = renderer.create(
		<PostItem
			title={'mockTitle'}
			postLink={'mockPostLink'}
			thumbnail={'mockThumbnail'}
			author={'mockAuthor'}
			time={'mockTime'}
		/>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});