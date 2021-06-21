
		var map = L.map('map').setView([25.046374, 121.517896], 12);
		mapLink =
			'<a href="http://openstreetmap.org">OpenStreetMap</a>';
		L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {
			attribution: '&copy; ' + mapLink + ' Contributors',
			maxZoom: 15,
		}).addTo(map);

		// Initialize the SVG layer
		map._initPathRoot()

		// We pick up the SVG from the map object
		var svg = d3.select("#map").select("svg"),
			g = svg.append("g");

		var t = d3.dsv(",", "text/csv;charset=GB2312");

		t("mrt_station.csv", function (collection) {
			collection.forEach(function (d) {
				d.LatLng = new L.LatLng(d.lat, d.lng)
			})
			var feature = g.selectAll("circle")
				.data(collection)
				.enter()
				.append("circle")
				.attr('class', 'price')
				.attr('fill-opacity', 0.1)
				.attr("stroke-width", 2)
				.attr("stroke", function (d) {
					var lineId = d.id;
					if (lineId.match(/BL/)) {
						return '#398AFC';
					}
					else if (lineId.match(/BR/)) {
						return '#CC9900';
					}
					else if (lineId.match(/B/)) {
						return '#CC9900';
					}
					else if (lineId.match(/R/)) {
						return '#FD5B56';
					}
					else if (lineId.match(/G/)) {
						return '#009900';
					}
					else if (lineId.match(/O/)) {
						return '#FFCC66';
					}
					else {
						return 'white';
					}
				})
				.attr("r", function (d) {
					var count = d.average;
					// var t = (Math.sqrt(count / 6000));
					
					var t = (count / 100000)*2;
					if (t < 3) {
						return 6;
					} else {
						return t;
					}
				})
				.on("mouseenter", function (d) {
					d3.select("#tooltip")
						.style("left", 150 + "px")
						.style("top", 200 + "px")
						.select("#Line")
						.text(d.line + d.id);

					d3.select("#tooltip")
						.style("left", 150 + "px")
						.style("top", 200 + "px")
						.select("#Name")
						.text(d.name);

					d3.select("#tooltip")
						.style("left", 150 + "px")
						.style("top", 200 + "px")
						.select("#Count")
						.text("Sale_Count : " + d.count + " units");

					d3.select("#tooltip")
						.style("left", 150 + "px")
						.style("top", 200 + "px")
						.select("#Average")
						.text("Average_Price: " + d.average + " NTD/py");

					d3.select("#tooltip")
						.style("left", 150 + "px")
						.style("top", 200 + "px")
						.select("#Area")
						.text("Average_Size: " + d.area + " py");

					d3.select("#tooltip")
						.style("left", 150 + "px")
						.style("top", 200 + "px")
						.select("#Management")
						.text("Management_Level: " + d.manager);
					//Show the tooltip
					d3.select("#tooltip").classed("hidden", false);
				})
				.on("mouseleave", function (d) {
					d3.select("#tooltip").classed("hidden", true);
				});

			var feature2 = g.selectAll("text")
				.data(collection)
				.enter()
				.append("text")
				.text(function (d) {
					return d.name;
				})
				.attr("text-anchor", "middle")
				.attr("font-family", "sans-serif")
				.attr("font-size", "8px")
				.attr("fill", "black");

			map.on("viewreset", update);
			update();

			function update() {
				feature.attr("transform",
					function (d) {
						return "translate(" +
							map.latLngToLayerPoint(d.LatLng).x + "," +
							map.latLngToLayerPoint(d.LatLng).y + ")";
					}
				)

				feature2.attr("transform",
					function (d) {
						return "translate(" +
							map.latLngToLayerPoint(d.LatLng).x + "," +
							map.latLngToLayerPoint(d.LatLng).y + ")";
					}
				)
			}
		})