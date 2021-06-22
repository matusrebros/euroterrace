document.addEventListener('DOMContentLoaded', function () {
	if (document.getElementById('price-slider')) {
		var mergingTooltipSlider = document.getElementById('price-slider');

		noUiSlider.create(mergingTooltipSlider, {
			start: [62000, 200000],
			connect: true,
			step: 10000,
			tooltips: [true, true],
			format: wNumb({
				decimals: 0
			}),
			tooltips: [wNumb({
				suffix: " &euro;",
				decimals: 0,
				thousand: ' '
			}), wNumb({
				suffix: " &euro;",
				decimals: 0,
				thousand: ' '
			})],
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
				decimals: 0
			}),
			tooltips: [wNumb({
				suffix: "  m²",
				decimals: 0,
				thousand: ' '
			}), wNumb({
				suffix: "  m²",
				decimals: 0,
				thousand: ' '
			})],

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

		if (document.getElementById('splide')) {
			new Splide('#splide', {
				type: 'loop',
				padding: {
					right: '10rem',
					left: '10rem',
				},
			}).mount();
		}
	}

	if (document.getElementById('vizualizacia')) {
		const p1 = document.getElementById("p1");
		const p2 = document.getElementById("p2");
		const p3 = document.getElementById("p3");
		const p4 = document.getElementById("p4");
		const p5 = document.getElementById("p5");
		const p6 = document.getElementById("p6");
		const p7 = document.getElementById("p7");
		const p1Tooltip = document.getElementById("p1-tooltip");
		const p2Tooltip = document.getElementById("p2-tooltip");
		const p3Tooltip = document.getElementById("p3-tooltip");
		const p4Tooltip = document.getElementById("p4-tooltip");
		const p5Tooltip = document.getElementById("p5-tooltip");
		const p6Tooltip = document.getElementById("p6-tooltip");
		const p7Tooltip = document.getElementById("p7-tooltip");
		const generalTooltip = document.querySelectorAll(".tooltip");

		p1.addEventListener("mouseover", function (event) {
			for (var i = 0; i < generalTooltip.length; i++) {
				generalTooltip[i].classList.remove('active');
			}
			p1Tooltip.classList.add("active");
		});

		p2.addEventListener("mouseover", function (event) {
			for (var i = 0; i < generalTooltip.length; i++) {
				generalTooltip[i].classList.remove('active');
			}
			p2Tooltip.classList.add("active");
		});

		p3.addEventListener("mouseover", function (event) {
			for (var i = 0; i < generalTooltip.length; i++) {
				generalTooltip[i].classList.remove('active');
			}
			p3Tooltip.classList.add("active");
		});

		p4.addEventListener("mouseover", function (event) {
			for (var i = 0; i < generalTooltip.length; i++) {
				generalTooltip[i].classList.remove('active');
			}
			p4Tooltip.classList.add("active");
		});

		p5.addEventListener("mouseover", function (event) {
			for (var i = 0; i < generalTooltip.length; i++) {
				generalTooltip[i].classList.remove('active');
			}
			p5Tooltip.classList.add("active");
		});

		p6.addEventListener("mouseover", function (event) {
			for (var i = 0; i < generalTooltip.length; i++) {
				generalTooltip[i].classList.remove('active');
			}
			p6Tooltip.classList.add("active");
		});

		p7.addEventListener("mouseover", function (event) {
			for (var i = 0; i < generalTooltip.length; i++) {
				generalTooltip[i].classList.remove('active');
			}
			p7Tooltip.classList.add("active");
		});
	}

	if (document.getElementById('galleryinterior')) {
		var lightbox1 = new SimpleLightbox('#galleryinterior a');
		var lightbox2 = new SimpleLightbox('#galleryexterior a');
	}

});
