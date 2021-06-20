var mergingTooltipSlider = document.getElementById('price-slider');

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


var mergingTooltipSliderArea = document.getElementById('area-slider');

noUiSlider.create(mergingTooltipSliderArea, {
	start: [80, 120],
	connect: true,
	step: 10,
	tooltips: [true, true],
	format: wNumb({
		decimals: 0,
		suffix: ' m²'
	}),

	range: {
		'min': 50,
		'max': 150
	}
});

var snapValuesArea = [
    document.getElementById('area-filter-min-area'),
    document.getElementById('area-filter-max-area')
];

mergingTooltipSliderArea.noUiSlider.on('update', function (values, handle) {
    // snapValues[handle].innerHTML = values[handle];
    snapValuesArea[handle].setAttribute("value", values[handle]);
});
