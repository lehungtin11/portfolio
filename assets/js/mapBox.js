const satelliteStyle = document.getElementById('satellite');
if (!mapboxgl.supported()) {
    // alert('Your browser does not support Mapbox GL');
    const mapBox = document.getElementById('map');
    
    satelliteStyle.remove();

    mapBox.innerText = "Your browser does not support Mapbox GL";
    mapBox.style.fontWeight = 600;
    mapBox.style.color = "red";
    

} else {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGVodW5ndGluMTEiLCJhIjoiY2x3NmxreWxoMW8zODJpcGhvY3FlOGQ3bCJ9.T8ZIvnE3ogDQLDmcINuWjw';
    const monument = [106.654000,10.759979];
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: monument,
        zoom: 15
    });

    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        'Here is where i live'
    );

    // create DOM element for the marker
    const el = document.createElement('div');
    el.id = 'marker';

    // create the marker
    new mapboxgl.Marker(el)
        .setLngLat(monument)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);

    map.addControl(new mapboxgl.FullscreenControl());

    // Change map style
    const classNameActive = "mapbox_style-active";

    satelliteStyle.onclick = () => {
        if(satelliteStyle.classList.contains(classNameActive)) {

            satelliteStyle.classList.remove(classNameActive);
            map.setStyle('mapbox://styles/mapbox/streets-v12');

        } else {

            satelliteStyle.classList.add(classNameActive);
            map.setStyle('mapbox://styles/mapbox/satellite-streets-v12');
            
        }
        
    };
}