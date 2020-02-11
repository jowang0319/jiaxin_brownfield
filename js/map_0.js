// 百度地图API功能
	var map = new BMap.Map("l-map");
	map.centerAndZoom(new BMap.Point(116.404269,39.916042), 10);
	map.enableScrollWheelZoom();                         //启用滚轮放大缩小

	var styleJson = [{
	    "featureType": "land",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "color": "#4a90e280"
	    }
	}, {
	    "featureType": "green",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "color": "#4a90e24d"
	    }
	}, {
	    "featureType": "building",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "building",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "building",
	    "elementType": "geometry.stroke",
	    "stylers": {
	        "color": "#dadadab3"
	    }
	}, {
	    "featureType": "subwaystation",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "color": "#b1545480"
	    }
	}, {
	    "featureType": "education",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "color": "#9b9b9b33"
	    }
	}, {
	    "featureType": "medical",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "color": "#9b9b9b33"
	    }
	}, {
	    "featureType": "scenicspots",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "color": "#e2efe53d"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "weight": 4
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#9b9b9b99"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "geometry.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#8f5a33ff"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "arterial",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "weight": 2
	    }
	}, {
	    "featureType": "arterial",
	    "elementType": "geometry.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "arterial",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "arterial",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#525355ff"
	    }
	}, {
	    "featureType": "arterial",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "local",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "weight": 1
	    }
	}, {
	    "featureType": "local",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#d8d8d8ff"
	    }
	}, {
	    "featureType": "local",
	    "elementType": "geometry.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "local",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "local",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#979c9aff"
	    }
	}, {
	    "featureType": "local",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "railway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "weight": 1
	    }
	}, {
	    "featureType": "railway",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#949494ff"
	    }
	}, {
	    "featureType": "railway",
	    "elementType": "geometry.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "subway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "weight": 1
	    }
	}, {
	    "featureType": "subway",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#d8d8d8ff"
	    }
	}, {
	    "featureType": "subway",
	    "elementType": "geometry.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "subway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "subway",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#979c9aff"
	    }
	}, {
	    "featureType": "subway",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "continent",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "continent",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "continent",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#333333ff"
	    }
	}, {
	    "featureType": "continent",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "city",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "city",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "city",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#ff540080"
	    }
	}, {
	    "featureType": "city",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "town",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "town",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "town",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#454d50ff"
	    }
	}, {
	    "featureType": "town",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "road",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#47434c8a"
	    }
	}, {
	    "featureType": "road",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "road",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffff00"
	    }
	}, {
	    "featureType": "poilabel",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "poilabel",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "poilabel",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffff00"
	    }
	}, {
	    "featureType": "road",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#8f8899ff"
	    }
	}, {
	    "featureType": "districtlabel",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "districtlabel",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "manmade",
	    "elementType": "geometry",
	    "stylers": {
	        "color": "#9b9b9b26",
	        "visibility": "on"
	    }
	}, {
	    "featureType": "tertiarywaysign",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "tertiarywaysign",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "provincialwaysign",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "provincialwaysign",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "nationalwaysign",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "nationalwaysign",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "highwaysign",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "highwaysign",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "entertainment",
	    "elementType": "geometry",
	    "stylers": {
	        "color": "#9b9b9b33"
	    }
	}, {
	    "featureType": "estate",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on",
	        "color": "#9b9b9b33"
	    }
	}, {
	    "featureType": "shopping",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "color": "#9b9b9bff"
	    }
	}, {
	    "featureType": "transportation",
	    "elementType": "geometry",
	    "stylers": {
	        "color": "#9b9b9b33"
	    }
	}, {
	    "featureType": "subwaylabel",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "subwaylabel",
	    "elementType": "labels.icon",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "tertiaryway",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#9b9b9b80"
	    }
	}, {
	    "featureType": "tertiaryway",
	    "elementType": "geometry.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "fourlevelway",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#9b9b9bff"
	    }
	}, {
	    "featureType": "tertiaryway",
	    "elementType": "geometry",
	    "stylers": {
	        "weight": 3,
	        "visibility": "on"
	    }
	}, {
	    "featureType": "cityhighway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "provincialway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "scenicspotsway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "universityway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "vacationway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "arterial",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#9b9b9b99"
	    }
	}, {
	    "featureType": "road",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "on"
	    }
	}, {
	    "featureType": "fourlevelway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#d3d3d3ff"
	    }
	}, {
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#4a90e2ff"
	    }
	}, {
	    "featureType": "water",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "cityhighway",
	    "elementType": "geometry.fill",
	    "stylers": {
	        "color": "#d3d3d3ff"
	    }
	}, {
	    "featureType": "highway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "6"
	    }
	}, {
	    "featureType": "highway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "7"
	    }
	}, {
	    "featureType": "highway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "8"
	    }
	}, {
	    "featureType": "highway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "9"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "6"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "7"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "8"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "9"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "6"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "7"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "8"
	    }
	}, {
	    "featureType": "highway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "9"
	    }
	}, {
	    "featureType": "district",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,9",
	        "level": "8"
	    }
	}, {
	    "featureType": "district",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,9",
	        "level": "9"
	    }
	}, {
	    "featureType": "district",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,9",
	        "level": "8"
	    }
	}, {
	    "featureType": "district",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,9",
	        "level": "9"
	    }
	}, {
	    "featureType": "village",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off"
	    }
	}, {
	    "featureType": "country",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#ff5400ff"
	    }
	}, {
	    "featureType": "country",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "district",
	    "elementType": "labels.text.fill",
	    "stylers": {
	        "color": "#8b572a87"
	    }
	}, {
	    "featureType": "district",
	    "elementType": "labels.text.stroke",
	    "stylers": {
	        "color": "#ffffffff"
	    }
	}, {
	    "featureType": "district",
	    "elementType": "labels.text",
	    "stylers": {
	        "fontsize": 22
	    }
	}, {
	    "featureType": "provincialway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,10",
	        "level": "8"
	    }
	}, {
	    "featureType": "provincialway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,10",
	        "level": "9"
	    }
	}, {
	    "featureType": "provincialway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,10",
	        "level": "10"
	    }
	}, {
	    "featureType": "provincialway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,10",
	        "level": "8"
	    }
	}, {
	    "featureType": "provincialway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,10",
	        "level": "9"
	    }
	}, {
	    "featureType": "provincialway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,10",
	        "level": "10"
	    }
	}, {
	    "featureType": "provincialway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,10",
	        "level": "8"
	    }
	}, {
	    "featureType": "provincialway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,10",
	        "level": "9"
	    }
	}, {
	    "featureType": "provincialway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "8,10",
	        "level": "10"
	    }
	}, {
	    "featureType": "nationalway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "6"
	    }
	}, {
	    "featureType": "nationalway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "7"
	    }
	}, {
	    "featureType": "nationalway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "8"
	    }
	}, {
	    "featureType": "nationalway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "9"
	    }
	}, {
	    "featureType": "nationalway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "10"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "6"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "7"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "8"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "9"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "10"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "6"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "7"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "8"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "9"
	    }
	}, {
	    "featureType": "nationalway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,10",
	        "level": "10"
	    }
	}, {
	    "featureType": "cityhighway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "6"
	    }
	}, {
	    "featureType": "cityhighway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "7"
	    }
	}, {
	    "featureType": "cityhighway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "8"
	    }
	}, {
	    "featureType": "cityhighway",
	    "stylers": {
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "9"
	    }
	}, {
	    "featureType": "cityhighway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "6"
	    }
	}, {
	    "featureType": "cityhighway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "7"
	    }
	}, {
	    "featureType": "cityhighway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "8"
	    }
	}, {
	    "featureType": "cityhighway",
	    "elementType": "geometry",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "9"
	    }
	}, {
	    "featureType": "cityhighway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "6"
	    }
	}, {
	    "featureType": "cityhighway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "7"
	    }
	}, {
	    "featureType": "cityhighway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "8"
	    }
	}, {
	    "featureType": "cityhighway",
	    "elementType": "labels",
	    "stylers": {
	        "visibility": "off",
	        "curZoomRegionId": "0",
	        "curZoomRegion": "6,9",
	        "level": "9"
	    }
	}]
	map.setMapStyleV2({styleJson:styleJson});