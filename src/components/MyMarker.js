import React, { useEffect, useRef } from 'react'
import { Marker } from 'react-leaflet'

export const MyMarker = (props) => {
  const leafletRef = useRef()
  useEffect(() => {
    leafletRef.current.openPopup()
  }, [])
  return <Marker ref={leafletRef} {...props} />
}
