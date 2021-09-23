import $host from './../http/axios';

export const usersHttp = async () => {
	try {
		return await $host.get('data.json').then(res => res.data);
	} catch (e) {
		return console.error(e);
	}
};
