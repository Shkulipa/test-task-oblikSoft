const Sort = (a, b, field) => {
	if (field === 'date') {
		if (Number(a[field]) > Number(b[field])) {
			return 1;
		}
		if (Number(a[field]) < Number(b[field])) {
			return -1;
		}

		return 0;
	} else {
		if (a[field] < b[field]) {
			return 1;
		}
		if (a[field] > b[field]) {
			return -1;
		}

		return 0;
	}
};

export default Sort;
