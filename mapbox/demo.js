const map = new mapboxgl.Map({
   container: 'map',
   style: 'https://assets.vector.hereapi.com/styles/berlin/base/mapbox/tilezen?apikey=' + window.apikey,
   center: [-122.431297, 37.773972], //Longitude, Latitude
   zoom: 11
});

