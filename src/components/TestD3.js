import React, {useState, useEffect} from 'react';
import {MapContainer, Popup, TileLayer, LayersControl} from 'react-leaflet';
import {useHistory} from 'react-router-dom';

import myPhoto from '../images/me.png';
import {ChangeView} from "./ChangeView";
import {MyMarker} from "./MyMarker";
import {useSelector} from "react-redux";

const cameraBtnStyle = {width: '100%', background:'tomato', border: 'none', color: "white", padding: '0.5rem', cursor: 'pointer'}
const {BaseLayer} = LayersControl;

function TestD3({curLocation}) {
    const {latitude, longitude} = curLocation;
    const curPosition = [latitude, longitude];
    const [img, setImg] = useState(myPhoto);
    const history = useHistory();
    const {success} = useSelector(state => state.cameraImg)

    const openCamera = () => {
        history.push('/camera');
    };

    useEffect(() => {
        setImg(success ? success : img);

    }, [img]);


    return (
        <div className="map__container">
            <MapContainer
                center={curPosition}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: "calc(100vh - 200px)" }}
                zoomControl={false}
            >
                <ChangeView center={curPosition} zoom={13} />
                <LayersControl>
                    <BaseLayer checked name='Alidade Smooth Dark'>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                        />
                    </BaseLayer>
                    <BaseLayer name='Alidade Smooth'>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                        />
                    </BaseLayer>
                    <BaseLayer name='Outdoors'>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
                        />
                    </BaseLayer>
                    <BaseLayer name='OSM Bright'>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
                        />
                    </BaseLayer>
                    <BaseLayer name='Normal'>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}{r}.png'
                        />
                    </BaseLayer>
                </LayersControl>
                <MyMarker position={curPosition}>
                    <Popup autoPan={false}>
                        <img src={img} alt='myPhoto' style={{width: '100%', border: 'solid tomato', background: "lightcoral", borderRadius: 10}} />
                        <button style={cameraBtnStyle} onClick={openCamera}>찰칵! 여기보세요</button>
                    </Popup>
                </MyMarker>
            </MapContainer>
        </div>
    );
}

export default TestD3;