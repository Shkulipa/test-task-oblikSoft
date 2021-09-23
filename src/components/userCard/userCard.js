import React from 'react';

//html-react-parser
import parse from 'html-react-parser';

//styles
import './styles.scss';

//services
import Time from '../../services/time';

//Types
import * as PropTypes from 'prop-types';
import { userType } from '../../utils/propsTypes';

const UserCard = ({
	user,
	readCard,
	avatarImg,
	socialImg,
	phoneString,
	parseDate,
}) => {
	const { id, sex, status, name, description } = user;

	return (
		<div className={`card ${status ? 'not-read' : null}`}>
			<div className="card__user">
				<div className={`img ${sex === 'male' ? 'male' : null}`}>
					<img src={avatarImg} alt="" />
					<img
						className="social-img"
						src={socialImg}
						onClick={() => readCard(id)}
						alt=""
					/>
				</div>

				<div className="info">
					<p>{name.length > 18 ? name.slice(0, 18) + '...' : name}</p>
					<p className="phone">{parse(`${phoneString}`)}</p>
				</div>
			</div>

			<p className="card__text">
				{description.length > 55
					? description.slice(0, 55) + '...'
					: description}
			</p>

			<div className="card__date">
				<p>
					{Time(parseDate.getHours())}:{Time(parseDate.getMinutes())}
				</p>
				<p>
					{parseDate.getDate()}.{parseDate.getMonth() + 1}.
					{parseDate.getFullYear()}
				</p>
			</div>
		</div>
	);
};

UserCard.propTypes = {
	user: PropTypes.shape(userType),
	readCard: PropTypes.func,
	avatarImg: PropTypes.string,
	socialImg: PropTypes.string,
	phoneString: PropTypes.string,
	parseDate: PropTypes.object,
};

export default UserCard;
