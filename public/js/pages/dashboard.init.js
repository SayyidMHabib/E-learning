$(function () {
	$('[data-plugin="knob"]').knob();
});
var options = {
	chart: { height: 350, type: "area", toolbar: { show: !1 } },
	colors: ["#3051d3", "#e4cc37"],
	dataLabels: { enabled: !1 },
	series: [
		{ name: "2018", data: [41, 47, 32, 75, 63, 35, 42, 20, 6, 15, 27, 39] },
		{ name: "2019", data: [35, 41, 62, 45, 14, 18, 29, 57, 28, 49, 35, 27] },
	],
	grid: { yaxis: { lines: { show: !1 } } },
	stroke: { width: 3, curve: "stepline" },
	markers: { size: 0 },
	xaxis: {
		categories: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		title: { text: "Month" },
	},
	fill: {
		type: "gradient",
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.7,
			opacityTo: 0.9,
			stops: [0, 90, 100],
		},
	},
	legend: {
		position: "top",
		horizontalAlign: "right",
		floating: !0,
		offsetY: -25,
		offsetX: -5,
	},
};
var chart;
options = {
	chart: { height: 270, type: "radialBar" },
	plotOptions: {
		radialBar: {
			hollow: { margin: 5, size: "38%" },
			track: { margin: 12 },
			dataLabels: {
				name: { fontSize: "18px", offsetY: "-10" },
				value: { fontSize: "16px", offsetY: "5" },
				total: {
					show: !0,
					label: "Total",
					formatter: function (e) {
						return 166;
					},
				},
			},
		},
	},
	colors: ["#3051d3", "#e4cc37", "#f06543"],
	series: [44, 55, 67],
	labels: ["Facebook", "Twitter", "Instagram"],
};
