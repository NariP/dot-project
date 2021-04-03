import React, {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Webcam from "react-webcam";
import {replaceImage} from "../modules/cameraImage";

const videoConstraints = {
    facingMode: "user"
};

function WebcamComponent(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const webcamRef = useRef(null);
    const [captureImg, setCaptureImg] = useState(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setCaptureImg(imageSrc);
            dispatch(replaceImage(imageSrc));
        },
        [webcamRef]
    );
    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>
            {
                captureImg &&
                <img src={captureImg} alt='사진'/>
            }
            <button onClick={()=>history.push('/')}>돌아가기</button>
        </>
    );
}

export default WebcamComponent;