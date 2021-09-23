import React from 'react';

//styles
import './styles.scss';

//components
import UserCardContainer from '../../components/userCard/userCardContainer';
import LoaderSpinner from '../../components/loaderSpinner/loaderSpinner';

//material-ui
import Grid from '@material-ui/core/Grid';

//img
import loadedImg from './../../asset/img/icons/refresh.svg';

//Types
import * as PropTypes from 'prop-types';
import { userType } from '../../utils/propsTypes';

const Home = ({ users, inputVal, loading, readCard, refreshData }) => {
	if (loading) {
		return <LoaderSpinner />;
	}

	return (
		<>
			<div className="loading">
				<img src={loadedImg} onClick={refreshData} alt="" />
				<p>Знайдено {users.length} клієнтів</p>
			</div>
			<Grid container item xs={12}>
				{users.map(user => {
					return (
						<UserCardContainer
							key={user.id}
							user={user}
							inputVal={inputVal}
							readCard={readCard}
						/>
					);
				})}
			</Grid>
		</>
	);
};

Home.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape(userType)),
	inputVal: PropTypes.string,
	loading: PropTypes.bool,
	readCard: PropTypes.func,
	refreshData: PropTypes.func,
};

export default Home;
