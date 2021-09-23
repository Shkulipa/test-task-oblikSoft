import { useState, useMemo } from 'react';

//services
import Sort from '../services/sort';

const UseSortArr = () => {
	const [arr, setArr] = useState([]);

	const sortedItems = useMemo(() => {
		const sortedArr = arr.sort((a, b) => Sort(a, b, 'status'));
		const lastStatusBal = sortedArr.findIndex(
			item => item.status === false
		);

		const notReadPost = [...sortedArr.slice(0, lastStatusBal)].sort(
			(a, b) => Sort(a, b, 'date')
		);
		const readPost = [...sortedArr.slice(lastStatusBal)].sort((a, b) =>
			Sort(a, b, 'date')
		);

		return [...notReadPost, ...readPost];
	}, [arr]);

	const reqSort = arrReq => {
		return setArr(arrReq);
	};

	return { sortedItems, reqSort };
};

export default UseSortArr;
