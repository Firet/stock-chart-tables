import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { useSelector } from 'react-redux';

const Chart = () => {
	const stockData = useSelector((state) => state.data);
	const dateTime = stockData?.data?.values.map(item => item.datetime)
	const stockOpen = stockData?.data?.values.map(item => Number(item.open));

	const chartOptions = {
		xAxis: {
			title: {
				text: "Intervalo",
			},
			categories: dateTime,
		},
		yAxis: {
			title: {
				text: "Cotización",
			},
		},
		series: [
			{
				name: "Valor",
				id: "1",
				data: stockOpen,
			},
		],
	};

	if (!stockData) {
		return <div>Cargando...</div>;
	}
	return (
		<div>
			<h3>Nombre activo {stockData?.data?.meta?.symbol}</h3>
			<h3>Intervalo {stockData?.data?.meta?.interval}</h3>
			<HighchartsReact
				highcharts={Highcharts}
				options={chartOptions}
				constructorType={"stockChart"}
			/>
		</div>
	);
};

export default Chart;