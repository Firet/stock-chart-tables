import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setData } from '../features/data/dataSlice';

const useFetchStock = () => {

	const [isDataFetch, setIsDataFetch] = useState(true);
	const dispatch = useDispatch();
	const url = 'https://api.twelvedata.com/time_series?symbol=TSLA&interval=5min&start_date=2021-04-16%2008:48:00&end_date=2021-04-16%2009:48:00&apikey=f5a3b0164cf24ed1b0e554793421d7c4';

		const fetchData = async () => {
			try {
				const response = await axios.get(url);
				const responseData = response.data;
				setData(responseData);
				dispatch(setData(responseData));
				setIsDataFetch(true);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();

	return isDataFetch;
};

export default useFetchStock;