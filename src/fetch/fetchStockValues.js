import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchStockValues = () => {


const [data, setData] = useState(null); // State to store fetched data

useEffect(() => {
  const fetchData = async () => {
	try {
	  const response = await axios.get('https://api.twelvedata.com/stocks?symbol=NFLX&source=docs');
	  const responseData = response.data;
	  setData(responseData);
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