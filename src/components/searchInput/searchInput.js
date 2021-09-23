import React from 'react';

//styles
import './style.scss';

//imgs
import search from './../../asset/img/icons/search.svg';
import cancel from './../../asset/img/icons/cancel.svg';

//Types
import * as PropTypes from 'prop-types';

const SearchInput = ({ inputVal, handelSearch, resetSearch }) => {
	return (
		<div className="inputBlock">
			<img className="search" src={search} alt="" />
			<button className="cancel" onClick={resetSearch}>
				<img src={cancel} alt="" />
			</button>
			<input
				type="number"
				onChange={e => handelSearch(e)}
				placeholder="Input phone..."
				value={inputVal}
			/>
		</div>
	);
};

SearchInput.propTypes = {
	inputVal: PropTypes.string,
	handelSearch: PropTypes.func,
	resetSearch: PropTypes.func,
};

export default SearchInput;
