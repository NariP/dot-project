import React, {useEffect, useState} from 'react';
import Geocode from 'react-geocode';
import TestD3 from './TestD3';

const formStyle = {background:'lightsalmon', height: 80, display: "flex", justifyContent:'center', alignItems:'center'};
const inputStyle = {width: '70%', height: '60%', border:'none'};
const searchBtnStyle = {height: '60%', border: 'none', background:'tomato', color:'white', cursor:'pointer'};
const sectionStyle = {background:'lightsalmon', height: 120, display: "flex", justifyContent:'center', alignItems:'center', flexDirection: 'column'};
const curLocationBtnStyle = {height: '40%', border: 'none', background:'tomato', color:'white', cursor:'pointer'};

export default  function MainPage({history}) {

    // Geocode
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)
    Geocode.setLanguage('en')
    Geocode.setRegion('es')
    Geocode.enableDebug()

    const GoogleMap = async (currentAddr) => {
        return Geocode.fromAddress(currentAddr)
            .then( response => {
                const { lat, lng } = response.results[0].geometry.location;
                return {lat, lng}
            })
            .catch(err => console.log(err))
    }

    const [searchInput, setSearchInput] = useState('');
    const [curLocation, setCurLocation] = useState({ latitude: 37.5866076, longitude: 126.9726223});
    const hasGeolocation = () => {
        return (navigator.geolocation);
    };
    const success = (position) => {
        const { latitude, longitude } = position.coords;
        setCurLocation({...curLocation, latitude, longitude})
    }

    const error = () => {
        console.error('error for geoLocation');
    }
    const getLocation = () => {
        if(!hasGeolocation) {
            // 없을 때
            alert('위치 정보 허용해주세요!!');

        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    const onChangeHandler = e => {
        setSearchInput(e.currentTarget.value);
    };

    const onClickHandler = async e => {
        e.preventDefault();
        let latitude, longitude;
        if(searchInput.length > 0) {
            const {lat, lng} = await GoogleMap(searchInput)
            latitude = lat;
            longitude= lng;
        }else {
            alert('1글자 이상 검색하세요!!')
        }
        setCurLocation({...curLocation, latitude, longitude})
    };

    useEffect(() => {
        console.log(curLocation)
    }, [curLocation])

    return (
        <>
            <header>
                <form style={formStyle}>
                    <label htmlFor='keyword' style={{ marginRight: 30 }}>검색하세요</label>
                    <input type='text' tabIndex='0' name='keyword' id='keyword' style={inputStyle} onChange={e => onChangeHandler(e)}/>
                    <button type='search' style={searchBtnStyle} onClick={e => onClickHandler(e)}>검색하기</button>
                </form>
                <section style={sectionStyle}>
                    <div style={{marginBottom: 10}}>위치 설정 허용해주셔야 기능이 작동합니다!</div>
                    <button style={curLocationBtnStyle} onClick={getLocation}>현재 위치 조회!</button>
                    <div>{`위도 : ${curLocation.latitude}, 경도: ${curLocation.longitude}`}</div>
                </section>
            </header>
            <TestD3 curLocation={curLocation}/>
        </>
    );
}