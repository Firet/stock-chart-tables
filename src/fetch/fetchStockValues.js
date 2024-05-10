import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../features/data/dataSlice';

const FetchStockValues = () => {


// const [data, setData] = useState(null); // State to store fetched data
const dispatch = useDispatch();
const data = useSelector((state) => state.data); // Get data from Redux store

useEffect(() => {
  const fetchData = async () => {
	try {
	  // const response = await axios.get('https://api.twelvedata.com/stocks?symbol=NFLX&source=docs');
    const response = await axios.get('https://api.twelvedata.com/time_series?symbol=TSLA&interval=5min&start_date=2021-04-16%2009:48:00&end_date=2021-04-16%2019:48:00&apikey=f5a3b0164cf24ed1b0e554793421d7c4');
	  const responseData = response.data;
	  setData(responseData);
    dispatch(setData(responseData)); // Dispatch action with fetched data
	} catch (error) {
	  console.error(error);
	}
  };

  fetchData(); // Fetch data on component mount
}, []); // Empty dependency array ensures data is fetched only once





  console.log('data es ', data);

  return (
    <div>
        <p>this is FetchStockValues</p>
    </div>
  );
};

export default FetchStockValues;