const tangram = Tangram.leafletLayer({
    scene: 'https://assets.vector.hereapi.com/styles/berlin/base/tangram/tilezen?apikey=' + apikey,
})

const map = L.map('map', {
center: [37.773972, -122.431297], //Latitude, Longitude
zoom: 11,
layers: [tangram],
});
map.attributionControl.addAttribution('&copy; HERE 2019');