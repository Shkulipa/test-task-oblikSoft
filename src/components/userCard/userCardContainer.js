import React, { useEffect, useState } from 'react';

//components
import UserCard from './userCard';

//hooks
import usePhoneNumber from '../../hooks/usePhoneNumber';

//Types
import * as PropTypes from 'prop-types';
import { userType } from '../../utils/propsTypes';

const UserCardContainer = ({ user, inputVal, readCard }) => {
	const { picture, social, date, phone } = user;

	const [avatarImg, setAvatarImg] = useState(null);
	const [socialImg, setSocialImg] = useState(null);

	const { phoneString } = usePhoneNumber(phone, inputVal);

	const parseDate = new Date(Number(date));

	useEffect(() => {
		import(`./../../asset/img/icons/${picture}`).then(image =>
			setAvatarImg(image.default)
		);
		import(`./../../asset/img/icons/${social}`).then(image =>
			setSocialImg(image.default)
		);
	}, [picture, social]);

	return (
		<UserCard
			user={user}
			readCard={readCard}
			parseDate={parseDate}
			avatarImg={avatarImg}
			socialImg={socialImg}
			phoneString={phoneString}
		/>
	);
};

UserCardContainer.propTypes = {
	user: PropTypes.shape(userType),
	inputVal: PropTypes.string,
	readCard: PropTypes.func,
};

export default UserCardContainer;
