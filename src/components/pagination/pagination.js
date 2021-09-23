import React from 'react';

//styles
import './styles.scss';

//Types
import * as PropTypes from 'prop-types';

const Pagination = ({ allPosts, onOnePage, goToPage }) => {
	const countPage = Math.ceil(Number(allPosts) / Number(onOnePage));

	let i = 1;
	const arrPages = [];
	while (i < countPage + 1) {
		arrPages.push(i);
		i++;
	}

	return (
		<>
			{arrPages.map(item => {
				return (
					<div
						className="page"
						key={item}
						onClick={() => goToPage(item)}
					>
						{item}
					</div>
				);
			})}
		</>
	);
};

Pagination.propTypes = {
	allPosts: PropTypes.number,
	onOnePage: PropTypes.number,
	goToPage: PropTypes.func,
};

export default Pagination;
