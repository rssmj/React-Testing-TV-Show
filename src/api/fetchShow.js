import axios from 'axios';

export const fetchShow = async () => {
	return axios
		.get(
			'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
		)
		.then(res => {
			console.log('response fetching data from api fetchShow, res:', res);
			return res;
		})
		.catch(err => {
			console.error(
				'error fetching data from api fetchShow, err: ',
				err.message
			);
			return err;
		});
};
