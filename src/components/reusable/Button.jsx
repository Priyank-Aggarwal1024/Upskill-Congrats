import React from 'react';

function Button({ text, classes, ...rest }) {
    return (
        <>  <div className="btn-div">
            <button className={`btn ${classes}`} {...rest}>

                {text}

                <svg xmlns="http://www.w3.org/2000/svg" width="135" height="35" viewBox="0 0 135 35" fill="none">
                    <path d="M1.26788 0.893555C1.26788 19.1342 16.0548 33.9211 34.2954 33.9211H133.378" stroke="url(#paint0_linear_1_4538)" strokeWidth="1.5" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="paint0_linear_1_4538" x1="81.6827" y1="6.27848" x2="136.72" y2="22.7658" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#49D043" />
                            <stop offset="1" stopColor="#FFB912" />
                        </linearGradient>
                    </defs>
                </svg>
            </button>

        </div>
        </>
    );
}

export default Button;