const UsePhoneNumber = (userNumber, searchNumber) => {
	const changeArr = [...userNumber].map((item, index) => {
		if (index === 2 || index === 5 || index === 7) {
			return item + ' ';
		}
		return item;
	});

	const compareString = userNumber.substr(0, searchNumber.length);

	let changeColorNumbers = 0;

	if (searchNumber.length > 0 && searchNumber === compareString) {
		changeColorNumbers = userNumber.slice(0, searchNumber.length);
		let newArr = ['<span>', ...changeArr];

		newArr.splice(changeColorNumbers.length + 1, 0, '</span>');

		return { phoneString: newArr.join('') };
	}

	return { phoneString: changeArr.join('') };
};

export default UsePhoneNumber;
