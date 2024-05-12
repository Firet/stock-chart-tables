import React from 'react';
import Chart from './chart/chart';
import useFetchStock from './hooks/useFetchStock';
import './App.css';

function App() {
	const isDataFetch = useFetchStock();

	return (
		<div className="App">
			<h1>Gráfico</h1>
			<div className="chart-container">
				{isDataFetch ? <Chart /> : <div>Cargando</div>}
			</div>
		</div>
	);
}

export default App;
