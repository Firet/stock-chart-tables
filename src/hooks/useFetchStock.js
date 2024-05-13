import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../slices/dataSlice';

const useFetchStock = () => {

	const interval = useSelector((state) => state?.data.interval);
	const [isDataFetch, setIsDataFetch] = useState(false);
	const dispatch = useDispatch();
	const symbol = 'TSLA'
	const startDate = '2024-05-10%2008:48:00';
	const endDate = '2024-05-10%2009:48:00';
	const apiKey = 'f5a3b0164cf24ed1b0e554793421d7c4';
	const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&start_date=${startDate}&end_date=${endDate}&apikey=${apiKey}`;

	const fetchData = async () => {
		try {
			const response = await axios.get(url);
			const responseData = response.data;
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