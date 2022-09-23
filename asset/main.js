// Making Leaflet map
var map = L.map('map').setView([39.037464, -95.761972], 13);

map.locate({setView: true, maxZoom:17}),

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var polygon = L.polygon([
    [39.03726, -95.76269],
    [39.04922, -95.76210],
    [39.04369, -95.72665],
    [39.01208, -95.72785],
    [39.01645, -95.76403],
]).addTo(map);

const myIcon = L.icon({
    iconUrl: 'red-pin(1).png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
});

// Metro station markers:
const rS = L.marker([39.03726, -95.76269]).bindPopup('Chick-fila')
const sSD = L.marker([39.04922, -95.76210]).bindPopup('Strasbourg-Saint-Denis')
const sentier = L.marker([39.04369, -95.72665]).bindPopup('Sentier')
const bourse = L.marker([48.86868503971672, 2.3412285142058167]).bindPopup('Bourse')
const qS = L.marker([48.869560129483226, 2.3358638645569543]).bindPopup('Quatre Septembre')
const gB = L.marker([48.871282159004856, 2.3434818588892714]).bindPopup('Grands Boulevards')

const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap)


// submit button
document.getElementById('submit').addEventListener('click', async (event) => {
	event.preventDefault()
	let business = document.getElementById('business').value
	let data = await getFoursquare(business)
	myMap.businesses = processBusinesses(data)
	myMap.addMarkers()
})
