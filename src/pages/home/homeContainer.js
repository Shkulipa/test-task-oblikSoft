import React, { useEffect, useState } from 'react';

//axios
import { usersHttp } from '../../http/getUsers';
import Grid from '@material-ui/core/Grid';

//components
import Home from './home';
import SearchInput from '../../components/searchInput/searchInput';
import Pagination from '../../components/pagination/pagination';

//hooks
import useSortArr from '../../hooks/useSortArr';

const HomeContainer = () => {
	const { sortedItems, reqSort } = useSortArr();
	const [inputVal, setInputVal] = useState('');
	const [countPosts, setCountPosts] = useState(0);
	const [loading, setLoading] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (!mounted) {
			setMounted(true);
			usersHttp()
				.then(res => {
					reqSort(res.users.users);
					setCountPosts(res.users.count);
				})
				.catch(err => console.error(err))
				.finally(() => setLoading(false));
		}
	}, [mounted, reqSort]);

	const handelSearch = e => {
		return setInputVal(e.currentTarget.value);
	};

	const resetSearch = () => {
		return setInputVal('');
	};

	const goToPage = page => {
		console.log('Load posts form ' + page + ' page');
	};

	const readCard = id => {
		const findItem = sortedItems.find(item => item.id === id);
		const newArrUsers = sortedItems.map(el => {
			if (el.id === id) {
				return {
					...findItem,
					status: false,
				};
			}

			return el;
		});

		reqSort(newArrUsers);
	};

	const refreshData = () => {
		setLoading(true);
		usersHttp()
			.then(res => {
				reqSort(res.users.users);
				setCountPosts(res.users.count);
			})
			.catch(err => console.error(err))
			.finally(() => setLoading(false));
	};

	return (
		<Grid container spacing={1}>
			<Grid container item justifyContent="center" xs={12}>
				<SearchInput
					inputVal={inputVal}
					handelSearch={handelSearch}
					resetSearch={resetSearch}
				/>
			</Grid>
			<Grid container item xs={12}>
				<Home
					users={sortedItems || []}
					inputVal={inputVal}
					loading={loading}
					readCard={readCard}
					refreshData={refreshData}
				/>
			</Grid>
			<Grid container item xs={12} justifyContent="flex-end">
				<Pagination
					allPosts={countPosts}
					onOnePage={8}
					goToPage={goToPage}
				/>
			</Grid>
		</Grid>
	);
};

export default HomeContainer;
