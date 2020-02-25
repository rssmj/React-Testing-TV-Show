import axios from 'axios';

export const fetchShow = async () => {
    try {
        const res = await axios
            .get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes');
        console.log('response fetching data from api fetchShow, res:', res);
        return res;
    }
    catch (err) {
        console.error('error fetching data from api fetchShow, err: ', err.message);
        return err;
    }
};
