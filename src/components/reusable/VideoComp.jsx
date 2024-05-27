import React from 'react';
import '../../styles/video.css'
import Video from '../../assets/browser.png'
function VideoComp({ classes, class2 }) {
    return (
        <div className={`common-video ${classes}`}>
            <>
                <img src={Video} alt="" />
                <div className={`inner-video ${class2}`}></div>
                <div className="inner-video-button">
                    <div className="video-play">
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                            <mask id="mask0_1_4597" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="65" height="65">
                                <rect x="0.977417" y="0.976562" width="63.0452" height="63.0452" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1_4597)">
                                <path d="M24.8239 47.8943V17.1045L49.0159 32.4994L24.8239 47.8943Z" fill="white" />
                            </g>
                        </svg>
                    </div>
                </div>
            </>
        </div>
    );
}

export default VideoComp;