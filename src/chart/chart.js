import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { useSelector } from 'react-redux';

const Chart = () => {
	const stockData = useSelector((state) => state.data);
	const dateTime = stockData?.data?.values.map(item => item.datetime)
	const stockVolume = stockData?.data?.values.map(item => Number(item.volume));
	const stockOpen = stockData?.data?.values.map(item => Number(item.open));

	const chartOptions = {
		title: {
			text: `Activo ${stockData?.data?.meta?.symbol}`
		},

		subtitle: {
			text: `Intervalo ${stockData?.data?.meta?.interval}`
		},
		rangeSelector: {
			floating: true,
			y: -65,
			verticalAlign: 'bottom'
		},
		xAxis: {
			title: {
				text: "Intervalo",
			},
			categories: dateTime,
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
				data: stockVolume,
				yAxis: 1
			},
			{
				name: "Open",
				id: "open",
				data: stockOpen,
			},
		],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 800
				},
				chartOptions: {
					rangeSelector: {
						inputEnabled: false
					}
				}
			}]
		}
	};

	if (!stockData) {
		return <div>Cargando...</div>;
	}
	return (
		<div>
			<HighchartsReact
				highcharts={Highcharts}
				options={chartOptions}
				constructorType={"stockChart"}
			/>
		</div>
	);
};

export default Chart;