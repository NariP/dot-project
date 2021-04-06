import React, { useState, useEffect } from 'react'import { useSelector } from 'react-redux'import { useHistory } from 'react-router-dom'import { MapContainer, Popup, TileLayer, LayersControl } from 'react-leaflet'import L from 'leaflet'import myPhoto from '../images/me.png'import defaultMarker from '../images/default_marker.svg'import { ChangeView } from './ChangeView'import { MyMarker } from './MyMarker'import { THEME, TEST } from '../types/types'import iconShadow from 'leaflet/dist/images/marker-shadow.png'const cameraBtnStyle = {  width: '100%',  background: 'tomato',  border: 'none',  color: 'white',  padding: '0.5rem',  cursor: 'pointer',}const DefaultIcon = L.icon({  iconUrl: defaultMarker,  shadowUrl: iconShadow,})L.Marker.prototype.options.icon = DefaultIconconst { BaseLayer } = LayersControlconst { ALIADE_SMOOTH_DARK, ALIADE_SMOOTH } = THEME// eslint-disable-next-line react/prop-typesfunction TestD3({ curLocation }) {  // eslint-disable-next-line react/prop-types  const { latitude, longitude } = curLocation  const curPosition = [latitude, longitude]  const [img, setImg] = useState(myPhoto)  const history = useHistory()  const { success } = useSelector((state) => state.cameraImg)  const openCamera = () => {    history.push('/camera')  }  const KEY = '6d2abe55-87b5-43dd-901e-3b781e1d1287'  useEffect(() => {    setImg(success || img)    console.log(process.env)    console.log(process.env.REACT_APP_SATDIA_MAPS_API_KEY)    console.log(TEST)  }, [img])  return (    <div className="map__container">      <MapContainer        center={curPosition}        zoom={13}        scrollWheelZoom        style={{ height: 'calc(100vh - 200px)' }}        zoomControl={false}      >        <ChangeView center={curPosition} zoom={13} />        <LayersControl>          <BaseLayer checked name="Alidade Smooth Dark">            <TileLayer              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'              url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${KEY}`}            />          </BaseLayer>          <BaseLayer name="Alidade Smooth">            <TileLayer              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'              url={ALIADE_SMOOTH}            />          </BaseLayer>        </LayersControl>        <MyMarker position={curPosition}>          <Popup autoPan={false}>            <img              src={img}              alt="myPhoto"              style={{                width: '100%',                border: 'solid tomato',                background: 'lightcoral',                borderRadius: 10,              }}            />            <button style={cameraBtnStyle} onClick={openCamera}>              찰칵! 여기보세요            </button>          </Popup>        </MyMarker>      </MapContainer>    </div>  )}export default TestD3