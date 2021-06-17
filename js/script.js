var mergingTooltipSlider = document.getElementById('merging-tooltips');

noUiSlider.create(mergingTooltipSlider, {
	start: [62000, 200000],
	connect: true,
	step: 10000,
	tooltips: [true, true],
	format: wNumb({
		decimals: 0,
		suffix: ' €'
	}),

	range: {
		'min': 12000,
		'max': 250000
	}
});

var snapValues = [
    document.getElementById('price-filter-min-price'),
    document.getElementById('price-filter-max-price')
];

mergingTooltipSlider.noUiSlider.on('update', function (values, handle) {
    // snapValues[handle].innerHTML = values[handle];
    snapValues[handle].setAttribute("value", values[handle]);
});
