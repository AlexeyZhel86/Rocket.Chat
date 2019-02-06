import Chart from 'chart.js/src/chart.js';

const doughnutChartConfiguration = (title) => ({
	layout: {
		padding: {
			top: 0,
			bottom: 0,
		},
	},
	legend: {
		display: true,
		position: 'right',
		labels: {
			boxWidth: 20,
			fontSize: 8,
		},
	},
	title: {
		display: 'true',
		text: title,
	},
	tooltips: {
		enabled: true,
		mode: 'point',
		displayColors: false, // hide color box
	},
	// animation: {
	// 	duration: 0 // general animation time
	// },
	hover: {
		animationDuration: 0, // duration of animations when hovering an item
	},
	responsive: true,
	maintainAspectRatio: false,
	responsiveAnimationDuration: 0, // animation duration after a resize
});


export const drawDoughnutChart = (chart, title, chartContext, dataLabels, dataPoints) => {
	if (!chart) {
		return;
	}
	if (chartContext) {
		chartContext.destroy();
	}

	return new Chart(chart, {
		type: 'doughnut',
		data: {
			labels: dataLabels,		// data labels, y-axis points
			datasets: [{
				data: dataPoints,		// data points corresponding to data labels, x-axis points
				backgroundColor: [
					'#2de0a5',
					'#f5455c',
					'#cbced1',
					'#ffd21f',
				],
				borderWidth: 0,
			}],
		},
		options: doughnutChartConfiguration(title),
	});
};
