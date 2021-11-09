import React from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhbGlkNjM1IiwiYSI6ImNrcm5rY2RwaDF3eDMycXB2eHJyNmdlc3IifQ.SqJlljOy4JIOPzHnOA1pDQ';

const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [78.476681027237, 22.1991660760527],
        zoom: 3,
        });
        if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates)
        }
        if(props.dropofCoordinates){
            addToMap(map, props.dropofCoordinates)
        }

        if(props.pickupCoordinates && props.dropofCoordinates){
            map.fitBounds([
                props.pickupCoordinates,
                props.dropofCoordinates
            ], {
                padding: 60
            })
        }
        }, [props.pickupCoordinates, props.dropofCoordinates]);
        const addToMap = (map, coordinates) =>{
          const marker1 = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);
        }
    return (
        <Wrapper id='map'>
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`