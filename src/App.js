import React from 'react';
import Chart from './components/chart/chart';
import CustomSelect from './components/select/select'
import useFetchStock from './hooks/useFetchStock';
import './App.css';

function App() {
	const isDataFetch = useFetchStock();

	return (
		<div className="App">
			<h1>Gráfico</h1>
			<CustomSelect />
			<div className="chart-container">
				{isDataFetch ? <Chart /> : <div>Cargando</div>}
			</div>
		</div>
	);
}

export default App;