import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../slices/dataSlice';
import 'dotenv/config';


const useFetchStock = () => {

	const interval = useSelector((state) => state?.data.interval);
	const [isDataFetch, setIsDataFetch] = useState(false);
	const dispatch = useDispatch();
	const symbol = 'TSLA'
	const startDate = '2024-05-10%2008:48:00';
	const endDate = '2024-05-10%2009:48:00';
	const apiKey = process.env.REACT_APP_API_KEY;
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