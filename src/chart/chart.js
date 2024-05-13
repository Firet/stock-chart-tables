import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { useSelector } from 'react-redux';

const Chart = () => {
	const stockData = useSelector((state) => state.data);
	const interval = stockData.interval;

	let dateSeries = [];
	let valumeSeries = [];
	let openSeries = [];

	if (stockData.data.status === 'ok') {
		dateSeries = stockData?.data?.values.map(item => item.datetime).reverse();
		valumeSeries = stockData?.data?.values.map(item => Number(item.volume)).reverse();
		openSeries = stockData?.data?.values.map(item => Number(item.open)).reverse();
	}


	const chartOptions = {
		rangeSelector: {
			floating: true,
			y: -65,
			verticalAlign: 'bottom'
		},
		xAxis: {
			title: {
				text: "Intervalo",
			},
			categories: dateSeries,
		},
		yAxis: [{
			title: {
				text: "Cotización",
			},
			labels: {
				align: 'left'
			},
			height: '80%',
			resize: {
				enabled: true
			}
		}, {
			labels: {
				align: 'left'
			},
			top: '80%',
			height: '20%',
			offset: 0
		}],
		tooltip: {
			shape: 'square',
			headerShape: 'callout',
			borderWidth: 0,
			shadow: false,
			positioner: function (width, height, point) {
				const chart = this.chart;
				let position;

				if (point.isHeader) {
					position = {
						x: Math.max(
							// Left side limit
							chart.plotLeft,
							Math.min(
								point.plotX + chart.plotLeft - width / 2,
								// Right side limit
								chart.chartWidth - width - chart.marginRight
							)
						),
						y: point.plotY
					};
				} else {
					position = {
						x: point.series.chart.plotLeft,
						y: point.series.yAxis.top - chart.plotTop
					};
				}

				return position;
			}
		},
		series: [
			{
				type: "column",
				name: "Volumen",
				id: "aapl-volume",
				data: valumeSeries,
				yAxis: 1
			},
			{
				name: "Open",
				id: "open",
				data: openSeries,
			},
		],
	};

	if (!stockData) {
		return <div>Cargando...</div>;
	}
	return (
		<div>
			<h3>Activo {stockData?.data?.meta?.symbol}</h3>
			<p>Intervalo {stockData?.interval ? interval : ''}</p>
			<HighchartsReact
				highcharts={Highcharts}
				options={chartOptions}
				constructorType={"stockChart"}
			/>
		</div>
	);
};

export default Chart;