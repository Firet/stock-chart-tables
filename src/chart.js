import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highstock";
import { useSelector } from 'react-redux';

const Chart = () => {
	const [hoverData, setHoverData] = useState(null);
	const stockData = useSelector(state => state.data);
	console.log('stockData.data es ', stockData?.data?.values[0]?.open);
	let dataStockOpen = [200, 300, 250, 500];
	dataStockOpen = [stockData?.data?.values[0]?.open ? stockData?.data?.values[0]?.open : null, 1, 2];
	
	const [chartOptions, setChartOptions] = useState({
		xAxis: {
			title: {
				text: 'Intervalo'
			},
			categories: ['Cat A', 'Cat B', 'Cat C'],
		},
		yAxis: {
			title: {
				text: 'Cotización'
			}
		},
		series: [
			{ data: dataStockOpen }
		],
		plotOptions: {
			series: {
				point: {
					events: {
						mouseOver(e) {
							setHoverData(e.target.category)
						}
					}
				}
			}
		}
	});

	const updateSeries = () => {
		setChartOptions({
			series: [
				{ data: [Math.random() * 5, 2, 1] }
			]
		});
	}

	if(!stockData) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h3>Nombre acción {stockData?.data?.meta?.symbol}</h3>
			<h3>Intervalo {stockData?.data?.meta?.interval}</h3>

			<HighchartsReact
				highcharts={Highcharts}
				options={chartOptions}
				constructorType={"stockChart"}
			/>
			<h3>Hovering over {hoverData}</h3>
			<button onClick={updateSeries}>Update Series</button>
		</div>
	)
}

export default Chart;
