import React from 'react';
import {useMap} from "react-leaflet";

export function ChangeView({center, zoom}) {
    // 이게 있어야 지도의 center 로 움직일 수 있음
    const map = useMap();
    map.setView(center, zoom);
    return null;
}