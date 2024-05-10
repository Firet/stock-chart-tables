import React, { Suspense, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts/highstock";
import { useSelector } from 'react-redux';

const Chart = () => {
	const [hoverData, setHoverData] = useState(null);
	const [chartOptions, setChartOptions] = useState({
		xAxis: {
			title: {
				text: 'Intervalo'
			},
			categories: ['A', 'B', 'C'],
		},
		yAxis: {
			title: {
				text: 'Cotización'
			}
		},
		series: [
			{ data: [1, 2, 3] }
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

	const stockData = useSelector(state => state.data);
	console.log('stockData es ', stockData);
	if(!stockData) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h3>Nombre acción</h3>
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
