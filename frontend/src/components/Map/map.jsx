import React from 'react'
import ReactMapboxGl, { Layer, Feature,Marker,Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "./map.css"
const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiYWRyaXJhbWV0aSIsImEiOiJja3o3YTh5azcwanQ2MnZzODh0YW12Yzd4In0.kzyBglTxGo9Z3meDWEmVzg'
});
const position = [-0.609989,38.818255]
const position2 = [-0.601234,38.822441]

const Mapa = () =>{
    return(
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
            center={{lon:-0.609989,lat:38.822441}}
            >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={position} />
            </Layer>
            <Marker
                coordinates={position}
                anchor="bottom"
                >
                <img className='img-map' src="https://cdn-icons-png.flaticon.com/128/3180/3180209.png"/>
            </Marker>
            <Marker
                coordinates={position2}
                anchor="bottom">
                <img className='img-map' src="https://cdn-icons-png.flaticon.com/128/3180/3180209.png"/>
            </Marker>
        </Map>
        
    )
    
}
export default Mapa
