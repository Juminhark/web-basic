import React, { useState } from 'react';

export const index = ({ asd }) => {
	const [text, setText] = useState('');

	return (
		<div>
			{asd}
			{console.log('adad')}
		</div>
	);
};
